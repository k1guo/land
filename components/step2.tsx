import Image from "next/image";

const StepContent2 = () => {
  return (
    <div className="bg-blue-50 p-10 flex flex-col md:flex-row">
      <div className="flex-1 md:flex-col">
        {/* 第1个容器的内容 */}
        <div className="flex-1 mt-16 md:mt-0 sm:mt-24  ">
          <p className="text-3xl text-gray-700 font-semibold">
            Building on modern foundations
          </p>
          <p className="text-xl text-gray-700 mt-2">
            Gain a competitive advantage by incorporating industry leading
            practices
          </p>
          <p className="text-lg font-semibold text-gray-700 mt-10">
            Built on top of Astro 4.0
          </p>
          <h1>
            Benefiting from the performance and developer-friendly features of
            this modern static site generator.
          </h1>
          <p className="text-lg font-semibold text-gray-700 mt-10">
            Styled using Tailwind CSS
          </p>
          <h1>
            Facilitating rapid design and consistent styling with this highly
            popular utility-first CSS framework.
          </h1>
          <p className="text-lg font-semibold text-gray-700 mt-10">
            Cross-browser compatibility
          </p>
          <h1>
            Ensure your website looks and functions consistently across various
            web browsers, delivering a seamless experience to all users.
          </h1>
        </div>
       
        
      </div>


      <div className="flex-1 p-6">
          {/* 第2个容器的内容 */}
          <div className="flex flex-col md:flex-row md:mb-8">
            {/* Image container */}
            <div className="flex-1 -m-2 rounded-xl p-1 ring-1 ring-inset ring-blue-50 lg:-m-4 lg:rounded-2xl lg:p-1">
              <Image
                src="/dashboard-preview.jpg"
                alt="product preview"
                width={1364}
                height={866}
                quality={100}
                className="rounded-md bg-white p-2 sm:p-8 md:p-10 shadow-2xl ring-2 ring-gray-900/10"
              />
            </div>
          </div>

          {/* Text container */}
        </div>
    </div>
  );
};

export default StepContent2;
