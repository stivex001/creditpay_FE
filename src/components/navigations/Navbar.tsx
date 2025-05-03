import {
    AboutIcon,
    AccountIcon,
    HomeIcon,
    TransactionIcon,
  } from "@/assets/icons/NavigationIcons";
  import logo from "@/assets/logo.png";
  import { NavLink } from "react-router-dom";
  
  const navLinks = [
    { label: "Home", icon: <HomeIcon />, href: "/" },
    { label: "Transaction", icon: <TransactionIcon />, href: "/transaction" },
    { label: "About Us", icon: <AboutIcon />, href: "/about" },
    { label: "Account", icon: <AccountIcon />, href: "/account" },
  ];
  
  export const Navbar = () => {
    return (
      <div className="bg-[#142B71] text-white py-4 sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="w-24">
            <img src={logo} alt="CreditPay Logo" className="w-full h-auto" />
          </div>
  
          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-16 text-sm">
            {navLinks.map(({ label, icon, href }) => (
              <NavLink
                key={label}
                to={href}
                className={({ isActive }) =>
                  `flex flex-col items-center gap-1 transition-opacity ${
                    isActive ? "text-white opacity-100" : "opacity-70 hover:opacity-100"
                  }`
                }
              >
                <div>{icon}</div>
                <span>{label}</span>
              </NavLink>
            ))}
          </div>
  
          {/* Auth Buttons */}
          <div className="flex items-center gap-4 text-sm">
            <button className="font-semibold">Login</button>
            <button className="bg-[#C6D5FF] text-[#142B71] py-1 px-4 rounded-sm font-semibold">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    );
  };
  