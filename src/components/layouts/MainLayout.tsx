import { ReactNode } from "react";
import ScrollToTop from "../../utils/ScrollToTop";

type Props = {
  children: ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <ScrollToTop />
      <div className="flex w-full h-full overflow-x-clip bg-primary ">{children}</div>
    </>
  );
};

export default MainLayout;
