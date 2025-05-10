import { Heading } from "@/components/shared/Heading";
import aboutImg from "@/assets/about.png";

const About = () => {
  return (
    <section className="my-20 container mx-auto flex flex-col gap-12">
      <Heading title="About us" />
      <div className="flex gap-16 min-h-[800px]">
        <div className="flex-1">
          <img
            src={aboutImg}
            alt="deal"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col justify-between pb-8">
          <div className="space-y-5">
            <h1 className="text-[#142B71] font-bold text-5xl leading-16">
              Welcome to Credit<span className="font-normal">Pay</span>, your
              trusted partner for financial solution
            </h1>
            <p className="text-[32px] text-[#142B71] font-medium">
              Empowering individuals and businesses with accessible loan options
            </p>
          </div>
          <div>
            <h1 className="text-[#142B71] font-bold text-4xl leading-16">Our Mission</h1>
            <p className="text-3xl text-[#142B71] font-medium leading-10">
              Our mission is to provide innovative financial solutions that
              empower individuals and businesses to achieve their goals. We are
              dedicated to making financial services more accessible,
              transparent, and user-friendly.
            </p>
            <button className="bg-yellow-400 cursor-pointer hover:bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-md transition-colors text-sm uppercase mt-12">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
