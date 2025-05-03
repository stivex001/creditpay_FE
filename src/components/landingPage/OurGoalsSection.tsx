import { Heading } from "../shared/Heading";
import BuildIcon from "@/assets/building.png";
import TrackIcon from "@/assets/track.png";
import FastIcon from "@/assets/approve.png";
import TrustIcon from "@/assets/trust.png";

const actions = [
  {
    label: "Access to credit, Build Wealth. Stay in control",
    icon: FastIcon,
  },
  { label: "Track and Grow your finances", icon: TrackIcon },
  { label: "Fast & Flexible Credit", icon: BuildIcon },
  { label: "Privacy & trust", icon: TrustIcon },
];

export const OurGoalsSection = () => {
  return (
    <section className="space-y-16 mb-28">
      <div className="text-center mb-16">
        <h1 className="font-semibold text-3xl text-[#142B71]">OUR GOALS</h1>
        <Heading title="Archive Financial Goals" />
      </div>

      <div className="container grid lg:grid-cols-2 gap-10 w-11/12 mx-auto">
        {actions.map(({ label, icon }) => (
          <div
            key={label}
            className="flex items-center gap-6 bg-white p-6 rounded-xl shadow-[12px_13px_58px_9px_#A4BEFF80]"
          >
            <div className="w-[157px] h-[145px]">
              <img src={icon} alt="icon" className="w-full h-full object-cover" />
            </div>
            <p className="text-[#142B71] lfont-bold text-base md:text-[28px] leading-9">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
