type Props = {
  children: React.ReactNode;
};

export const SocialIcon = ({ children }: Props) => {
  return (
    <a
      href="#"
      className="text-white hover:text-gray-300 transition-colors w-6 h-6 flex items-center justify-center"
    >
      {children}
    </a>
  );
};
