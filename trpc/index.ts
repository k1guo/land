import { privateProcedure, publicProcedure, router } from './trpc';
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import {TRPCError} from '@trpc/server'
import { db } from '../db';
import { absoluteUrl } from '../lib/utils';
import { getUserSubscriptionPlan, stripe } from '../lib/stripe';
import { PLANS } from '@/config/stripe';

interface PageProps{
    params:{
        fileid:string
    }
}

export const appRouter = router({
    authCallback:publicProcedure.query(async () => {
        const {getUser} = getKindeServerSession()
        const user = await getUser()

        if (! user || !user.id || !user.email )
        throw new TRPCError({code:"UNAUTHORIZED"})

        // check if the user is in the database
const dbUser = await db.user.findFirst({
    where:{
        id:user.id
    }
})
    if(!dbUser){
        await db.user.create({
            data:{
                id:user.id,
                email:user.email
            }
        })
    }

        return {success:true}
    }),


    // 下面这个 用于处理与 Stripe 支付会话相关的逻辑。 私有的，需要授权才能访问。
    createStripeSession: privateProcedure.mutation(async ({ctx}) => {
        const {userId} =ctx;

        const billingUrl = absoluteUrl("/dashboard/billing");
        
        if(!userId) throw new TRPCError({code:"UNAUTHORIZED"})
        const dbUser = await db.user.findFirst({
            where:{
                id:userId
            }
        });

        if(!dbUser) throw new TRPCError({code:"UNAUTHORIZED"})

        const subscriptionPlan = await getUserSubscriptionPlan()

        // 如果这个if失败就代码用户没有订阅
        if (subscriptionPlan.isSubscribed && dbUser.stripeCustomerId){
            const stripeSession = await stripe.billingPortal.sessions.create({
                customer:dbUser.stripeCustomerId,
                return_url:billingUrl
            });

            return {url: stripeSession.url}
        }
// 创建一个 Stripe 支付会话（session），用于处理在线支付，特别是订阅类型的支付。
        const stripeSession =
        // 创建一个新的支付会话。
        await stripe.checkout.sessions.create({
        // success_url: 如果支付成功，用户将被重定向到这个 URL。
          success_url: billingUrl,
        //   cancel_url: 如果用户取消支付，将被重定向到这个 URL。
          cancel_url: billingUrl,
          payment_method_types: ['card', 'paypal'],
        //   意味着这是一个订阅类型的支付。
          mode: 'subscription',
        //   表示自动收集用户的账单地址。
          billing_address_collection: 'auto',
          line_items: [
            {
            // 它查找名为“Pro”的计划，并获取价格 ID。
              price: PLANS.find(
                (plan) => plan.name === 'Pro'
              )?.price.priceIds.test,
              quantity: 1,
            },
          ],
        //metadata: 包含额外信息，这里传递了用户 ID (userId)。
          metadata: {
            userId: userId,
          },
        })

      return { url: stripeSession.url }
    }
  ),

});
// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;