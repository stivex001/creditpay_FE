import { ReactNode } from "react";
import ScrollToTop from "../../utils/ScrollToTop";
import { Navbar } from "../navigations/Navbar";
import Footer from "../navigations/Footer";


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
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
