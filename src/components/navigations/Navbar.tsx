import { AboutIcon, HomeIcon } from "@/assets/icons/NavigationIcons";
import logo from "@/assets/logo.png";
import { getUserInitials } from "@/utils/getUserInitials";
import { Link, NavLink } from "react-router-dom";
import { useAuthStore } from "../../../store/authStore";

const navLinks = [
  { label: "Home", icon: <HomeIcon />, href: "/" },
  // { label: "Transaction", icon: <TransactionIcon />, href: "/transaction" },
  { label: "About Us", icon: <AboutIcon />, href: "/about" },
  // { label: "Account", icon: <AccountIcon />, href: "/account" },
];

export const Navbar = () => {
  const { currentUser } = useAuthStore();

  const initials = getUserInitials(
    currentUser?.firstName,
    currentUser?.lastName
  );

  return (
    <div className="bg-[#142B71] text-white py-4 px-3 lg:px-0 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="w-24">
          <img src={logo} alt="CreditPay Logo" className="w-full h-auto" />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-16 text-sm">
          {navLinks.map(({ label, href }) => (
            <NavLink
              key={label}
              to={href}
              className={({ isActive }) =>
                `flex flex-col items-center gap-1 transition-opacity ease-in ${
                  isActive ? "text-white " : "text-[#A4BEFF]  hover:text-white"
                }`
              }
            >
              <span className="font-medium text-2xl">{label}</span>
            </NavLink>
          ))}
        </div>

        {/* Auth Buttons */}
        {currentUser ? (
          <div className="bg-yellow-500 w-[44px] h-[44px] flex items-center justify-center rounded-full text-base font-semibold cursor-pointer">
            {initials}
          </div>
        ) : (
          <div className="flex items-center gap-4 text-sm">
            <Link to="/auth/login" className="font-semibold">
              Login
            </Link>
            <Link
              to="/auth/register"
              className="bg-[#C6D5FF] text-[#142B71] py-1 px-4 rounded-sm font-semibold"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
