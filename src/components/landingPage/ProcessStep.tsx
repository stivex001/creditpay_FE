type ProcessProp = {
  number: string;
  title: string;
  description: string;
  isReversed?: boolean;
  image: string;
  numberColor?: string;
};

export const ProcessStep = ({
  number,
  title,
  description,
  isReversed = false,
  image,
}: ProcessProp) => {
  return (
    <div
      className={`flex flex-col ${
        isReversed ? "md:flex-row-reverse" : "md:flex-row"
      } items-center gap-8 mb-16 md:mb-24`}
    >
      <div className="w-full md:w-1/2 flex justify-center">
        <img src={image} alt="image" />
      </div>

      {/* Step number and content */}
      <div className="relative w-full md:w-1/2 flex">
        <div className="absolute -top-16 -left-20">
          <div
            className={`text-8xl md:text-8xl font-bold text-[#142B717A] opacity-50`}
          >
            {number}
          </div>
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-4">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};
