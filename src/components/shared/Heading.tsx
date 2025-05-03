type Props = {
  title: string;
  desc?: string;
};

export const Heading = ({ title, desc }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-[#142B71] text-3xl md:text-4xl lg:text-5xl font-bold">{title}</h1>
      <p className="text-[#142B71] text-2xl md:text-3xl">{desc}</p>
    </div>
  );
};
