"use client"

import { ArrowRight } from 'lucide-react';
import {Button} from './ui/button'
import { trpc } from '../app/_trpc/client';

const UpgradeButton = () => {

    // 处理stripe支付对话的创建和转跳

    // 使用 trpc.createStripeSession.useMutation 钩子创建一个 Stripe 会话。
    
    const {mutate:createStripeSession} =trpc.createStripeSession.useMutation({
        // 如果会话创建成功并返回了一个 URL，浏览器将重定向到这个 URL
        // otherwise 重定向到“/dashboard/billing”。
        
        onSuccess:({url}) => {
            console.log(url);
            window.location.href = url ?? "/dashboard/billing"
        }
    })

    return ( 
        <Button onClick={() => createStripeSession()} className='w-full'>
            Upgrade now <ArrowRight className='h-5 w-5 ml-1.5'/>
        </Button>
     );
}
 
export default UpgradeButton;

