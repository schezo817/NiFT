import Link from "next/link";
import { HiChevronDown } from "react-icons/hi";
import { MdLogin, MdOutlineHome, MdOutlineInfo, MdMenu } from "react-icons/md";

const NFTdetail = () => {
    return (
      <div className="bg-white">
        <div className="pt-6">
          <nav aria-label="Breadcrumb">
            <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"></ol>
          </nav>
      


          {/* <!-- Product info --> */}
          <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
            <div className="aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
              <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Model wearing plain white basic tee." className="h-full w-full object-cover object-center"/>
            </div>
      
            {/* <!-- Options --> */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Basic Tee 6-Pack</h1>
              </div>
              <div className="mt-1">
              <h1 className="text-2xl tracking-tight text-gray-900 sm:text-xl">Leonardo da Vinci</h1>
              </div>
              <div className="mt-5">
                <p className="text-3xl tracking-tight text-gray-900">$192</p>
              </div>


      
              <form className="mt-10">
                <div className="space-y-6">
                  <p className="text-base text-gray-900">The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: &quot;Black&quot;. Need to add an extra pop of color to your outfit? Our white tee has you covered.</p>
                </div>
      
                <button type="submit" className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Buy Now</button>
              </form>
            </div>
  
        
          </div>
        </div>
      </div>


      
    );
};

export default NFTdetail;
