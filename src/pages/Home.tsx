import { ActionSection } from "@/components/landingPage/ActionSection";
import { HeroSection } from "@/components/landingPage/HeroSection";
// import { HowWeWorks } from "@/components/landingPage/HowWeWorks";
import { OurGoalsSection } from "@/components/landingPage/OurGoalsSection";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <ActionSection />
      <OurGoalsSection />
      {/* <HowWeWorks /> */}
    </main>
  );
};

export default Home;
