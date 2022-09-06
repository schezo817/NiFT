import Link from "next/link";

const Brand = () => {
    return (
        <div className="bg-white">
            <div className="min-w-fit">
                <img src="https://placeimg.com/800/200/arch" className="w-screen object-cover" />
            </div>

            <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
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
                </form>
                </div>
            </div>
        </div>
    );
};

export default Brand;
