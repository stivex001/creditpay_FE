type AppDownloadButtonProps = {
  text: string;
  className?: string;
};

export const AppDownloadButton = ({
  text,
  className,
}: AppDownloadButtonProps) => {
  return (
    <div
      className={`flex items-center space-x-2 bg-black text-white px-3 py-2 rounded ${className}`}
    >
      <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
        <div className="w-3 h-3 bg-black rounded-full"></div>
      </div>
      <div className="flex flex-col">
        <span className="text-xs">Get it on</span>
        <span className="text-sm font-medium">{text}</span>
      </div>
    </div>
  );
};
