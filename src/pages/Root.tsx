import MainLayout from "@/components/layouts/MainLayout";
import { Outlet } from "react-router-dom";
const Root = () => {
  return (
    <>
      <MainLayout>
        <Outlet />
      </MainLayout>
    </>
  );
};

export default Root;
