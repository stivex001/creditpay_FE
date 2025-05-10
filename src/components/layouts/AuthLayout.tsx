import { ReactNode } from "react";
import logo from "../../assets/logo.png";

type Props = {
  children: ReactNode;
};

const AuthLayout = ({ children }: Props) => {


  return (
    <div className="flex w-full h-full  no-scrollbar bg-gray1">
      <div className="flex-1 flex flex-col gap-8 px-6 lg:px-24 py-9">
        <div className="flex-start w-[188px] lg:w-[249px] lg:h-[89px]">
          <img src={logo} />
        </div>
        {children}
      </div>
      <div className="hidden flex-1 lg:flex flex-col items-center py-16 px-12 bg-authbg bg-cover bg-no-repeat no-scrollbar">
        <div className="w-[600px] mb-14">
          {/* <img
            src={slidesData[currentSlide].image}
            alt="description"
            className="w-full h-full object-cover"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
