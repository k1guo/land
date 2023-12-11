import Link from "next/link";
import MaxWidthWrapper from "./maxWidthWrapper";
import { buttonVariants } from "./ui/button";
import {LoginLink, getKindeServerSession} from '@kinde-oss/kinde-auth-nextjs/server'
import {RegisterLink} from '@kinde-oss/kinde-auth-nextjs/server'
import { ArrowRight } from "lucide-react";
import UserAccountNav from "./UserAccountNav";
import MobileNav from "./MobileNav";
import { Poppins } from "next/font/google";
import { cn } from "../lib/utils";
import { ModeToggle } from "./ui/mode-toggle";



const font = Poppins({
  weight:"600",
  subsets:["latin"]
})

const Navbar = () => {

  const {getUser} = getKindeServerSession()
  const user = getUser

  return (
    <nav className="sticky h-16 inset-x-0 top-0 z-30 w-full border-b border-gray-10 bg-secondary/60 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-16 items-center justify-between border-b">
          {/* <Link href="/" className="flex z-40 font-bold"> */}
          <Link href="/" 
          className={cn("hidden md:block text-xl md:text-3xl font-bold text-variant ",
          font.className
          
          )}>
            {/* todo: add special format as logo */}
            <span>Curiomate</span>
          </Link>

          <MobileNav isAuth={!!user} />

          <div className="hidden items-center space-x-4 sm:flex">
            {!user?(
              <>
              <Link
                  href="/Home"
                  className={buttonVariants({
                    variant: "ghost",
                    size: "sm",
                  })}
                >
                  Home
                </Link>
                
                <Link
                  href="/explore"
                  className={buttonVariants({
                    variant: "ghost",
                    size: "sm",
                  })}
                >
                  Explore
                </Link>
  
                <Link
                  href="/pricing"
                  className={buttonVariants({
                    variant: "ghost",
                    size: "sm",
                  })}
                >
                  Pricing
                </Link>
  
                <LoginLink 
                  className={buttonVariants({
                    variant: "ghost",
                    size: "sm",
                  })}
                >
                  Sign in
                </LoginLink>
        



                <RegisterLink 
                  href="/register"
                  className={buttonVariants({
                    size: "sm",
                  })}
                >
                  Get started{' '} 
                  <ArrowRight className ='ml-1.5 h-5 w-5'/>
                </RegisterLink>
  
  
              </>
            ):(
              <>
              <Link
                href='/dashboard'
                className={buttonVariants({
                  variant: 'ghost',
                  size: 'sm',
                })}>
                Dashboard
              </Link>

              <ModeToggle />

              <UserAccountNav
                name={
                  // !user.given_name || !user.family_name
                  //   ? 'Your Account'
                  //   : `${user.given_name} ${user.family_name}`
                  "Your account"
                }
                // email={user.email ?? ''}
                // imageUrl={user.picture ?? ''}
                email = {"email"}
                imageUrl={''}
              />
            </>
            )
            }
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
