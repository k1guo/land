import { PLANS } from '@/config/stripe'
import { db } from '../db'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? '', {
//   apiVersion: '2023-08-16',
  typescript: true,
})
// 下面这行在获取用户当前的信息
export async function getUserSubscriptionPlan() {

//user 是 Kinde 认证系统）中获取的当前登录用户的信息。
  const { getUser } = getKindeServerSession()
  const user = await getUser()

//   如果找不到用户 返回默认计划的信息
  if (!user ||! user.id) {
    return {
      ...PLANS[0],
      isSubscribed: false,
      isCanceled: false,
      stripeCurrentPeriodEnd: null,
    }
  }
// 在数据库中查询具有指定id的用户
// await 关键字表明这是一个异步操作。代码会等待数据库查询完成并返回结果，然后才继续执行后续代码。
  const dbUser = await db.user.findFirst({
    where: {
      id: user.id,
    },
  })

//   如果没有在数据库中找到这个用户 
  if (!dbUser) {
    return {
      ...PLANS[0],
      isSubscribed: false,
      isCanceled: false,
      stripeCurrentPeriodEnd: null,
    }
  }
// 查看这个用户是否是有效订阅
  const isSubscribed = Boolean(
    dbUser.stripePricedId &&
      dbUser.stripeCurrentPeriodEnd && // 86400000 = 1 day
      dbUser.stripeCurrentPeriodEnd.getTime() + 86_400_000 > Date.now()
  )
//  如果用户已订阅，根据 stripePricedId 在 PLANS 中查找对应的订阅计划。
  const plan = isSubscribed
    ? PLANS.find((plan) => plan.price.priceIds.test === dbUser.stripePricedId)
    : null

    // 检查订阅是否被取消:
  let isCanceled = false
  if (isSubscribed && dbUser.stripeSubscriptionId) {
    const stripePlan = await stripe.subscriptions.retrieve(
      dbUser.stripeSubscriptionId
    )
    isCanceled = stripePlan.cancel_at_period_end
  }

  return {
    ...plan,
    stripeSubscriptionId: dbUser.stripeSubscriptionId,
    stripeCurrentPeriodEnd: dbUser.stripeCurrentPeriodEnd,
    stripeCustomerId: dbUser.stripeCustomerId,
    isSubscribed,
    isCanceled,
  }
}