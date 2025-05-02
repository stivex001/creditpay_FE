import { ReactNode } from "react";
import ScrollToTop from "../../utils/ScrollToTop";
import { Navbar } from "../navigations/Navbar";

type Props = {
  children: ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <ScrollToTop />
      <div>
        <Navbar />
        <main className="p-4">{children}</main>
        <footer className="bg-gray-800 text-white p-4">Footer</footer>
      </div>
    </>
  );
};

export default MainLayout;
