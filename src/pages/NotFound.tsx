
import CustomButton from "@/components/controlled/CustomButton";
import { useLocation, Link } from "react-router-dom";
const NotFound = () => {
  const { pathname } = useLocation();

  return (
    <section className="flex flex-col items-center justify-center w-screen h-screen space-y-4 bg-secondary/20">
      {" "}
      <p className="mt-20 text-3xl font-bold text-center text-[#142B71]">
        404 Not Found
      </p>
      <span>{pathname} is not available at the moment</span>
      <Link to="/">
        <CustomButton label="Go To Home" variant="primary" />
      </Link>
    </section>
  );
};

export default NotFound;
