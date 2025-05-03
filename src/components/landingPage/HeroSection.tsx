import heroImg from "@/assets/images/hero.png";

// Hero Section Component
export const HeroSection = () => {
  return (
    <section className="bg-white py-12 md:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row  justify-between">
          {/* Left Column - Text Content */}
          <div className="lg:w-[55%] mb-10">
            <p className="text-blue-900 text-lg font-medium mb-2">
              Payment up till ₦2,000,000.00
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-blue-900 leading-tight mb-4">
              Easiest place to
              <br className="hidden sm:block" /> apply for your loan
            </h1>

            <p className="text-blue-900 text-xl mb-8">
              Access to credit, Build Wealth. Stay in control
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-md transition-colors text-sm">
                HOW WE WORK
              </button>

              <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-md transition-colors text-sm">
                MY STATISTICS
              </button>
            </div>
          </div>

          {/* Right Column - Image or Custom Illustration */}
          <div className="lg:w-[45%] -mt-36">
            <div className="">
              <img src={heroImg} alt="hero" className="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
