import Link from "next/link";
import MaxWidthWrapper from "../components/maxWidthWrapper";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "../components/ui/button";
import Image from "next/image";
import Price from "../components/price";
import Footer from "../components/footer";
import StepContent from "../components/Steps";
import StepContent2 from "../components/step2";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
        {/* 下面div是一个类似按钮的组件， */}
        <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
          <p className='="text-sm font-semibold text-gray-700'>
            curiomate is not public!
          </p>
        </div>
        <h1 className="max-w-6xl text-5xl font-bold md:text6xl lg:text-7xl">
          Create your <span className="text-blue-600">picture book</span> in
          seconds.
        </h1>
        <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg">
          Curiomate allows you to have your own picture book with any ideas.
          Simply upload your idea text and create your own picture book right
          away.
        </p>
        {/* target='_blank' 用于指示浏览器在用户点击 “Get started” 链接时，
        应该在新的标签页中打开 /dashboard 页面。*/}
        <Link
          className={buttonVariants({
            size: "lg",
            className: "mt-5",
          })}
          href="/dashboard"
          target="_blank"
        >
          Get started <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </MaxWidthWrapper>

      {/* value proposition section */}
      <div>
        <div className="relative isolate">
          <div
            aria-hidden="true"
            className="pointer-event-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blue-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1%,100% 61.6%, 97.5% 26.9%,85.5% 0.1%, 80.7% 2% )",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to -[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>

          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="mt-16 flow-root sm:mt-24">
              {/* 下面这一行是设置了一个透明的边框 */}
              <div className=" -m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:arounded-2xl lg:p-4 ">
                {/* 这个是透明边框里面的图片 */}
                <Image
                  src="/dashboard-preview.jpg"
                  alt="product preview"
                  width={1364}
                  height={866}
                  quality={100}
                  // 下面这行是讲图片的边框变得圆滑
                  className="rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-2-gray-900/10"
                />
              </div>
            </div>
          </div>
        </div>

        {/* <div className="flex overflow-x-auto whitespace-nowrap p-4 space-x-4 mt-20 justify-center" style={{ width: '100vw' }}>
       
              {[1, 2, 3, 4, 5, 6, 7].map((item) => (
           <div key={item} className="flex-none w-80 h-48 bg-blue-200 rounded-lg flex items-center justify-center" style={{ minWidth: '320px' }}>
               <span> 项目 {item}</span>
           </div>
                 ))}
             </div> */}

        {/* feature section */}

        <div className="mx-auto mb-32 mt-32 max-w-5xl sm:mt-56">
          <div className="mb-12 px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="mt-2 font-bold text-4xl sm:text-5xl">
                Start create in minutes
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Create your own picture book has never been easier than with
                Curiomate
              </p>
            </div>
          </div>
        </div>

        {/* steps */}
        <ol className="my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0">
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-blue-600"> Step 1</span>
              <span className="text-xl font-semibold">
                Sign up for an account
              </span>
              <span className="mt-2 text-zinc-700">
                Either starting out with a free plan or choose our{" "}
                <Link
                  href="pricing"
                  className="text-blue-700 underline underline-offset-2"
                >
                  pro plan
                </Link>
              </span>
            </div>
          </li>

          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-blue-600"> Step 2</span>
              <span className="text-xl font-semibold">
                {" "}
                chat with curiomate
              </span>
              <span className="mt-2 text-zinc-700">
                we&apos;ll process your file and make it ready for you.
              </span>
            </div>
          </li>

          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-blue-600"> Step 2</span>
              <span className="text-xl font-semibold">
                {" "}
                chat with curiomate
              </span>
              <span className="mt-2 text-zinc-700">
                we&apos;ll process your file and make it ready for you.
              </span>
            </div>
          </li>
        </ol>
      </div>

      {/* 这里有contect介绍部分 */}
      <div className="mt-24">
      <StepContent ></StepContent>
      <StepContent2 ></StepContent2>
      </div>
     

      {/* 接下来的这个部分是用户订阅的部分*/}

      <div>
        <Price></Price>
      </div>

      {/* 处理页脚 */}

      <Footer />
    </>
  );
}
