import { ReactNode } from "react";
import logo from "../../assets/images/logo2.svg";
import { Link } from "react-router-dom";

type Props = {
  children: ReactNode;
  authImg: any;
};

const AuthLayout = ({ children, authImg }: Props) => {
  return (
    <div className="flex w-full min-h-screen">
      <div className="flex-1 bg-[#A4BEFF5C] flex flex-col justify-center items-center ">
        <Link to="/">
          <img src={logo} className="pt-10" />
        </Link>

        <div className="">
          <img src={authImg} alt="" className=" -mt-20" />
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-8 px-6 lg:px-24 justify-center items-center py-16">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
