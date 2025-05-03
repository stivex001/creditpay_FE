import { SendIcon } from "@/assets/icons/NavigationIcons";
import { useState } from "react";

export const EmailSubscription = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Add subscription logic here
    console.log("Subscribed email:", email);
    setEmail("");
  };

  return (
    <div className="flex mt-2 border-[1.5px] border-[#FAFAFA] px-4 py-3 rounded-sm">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className=" text-white text-base w-full focus:outline-none"
      />
      <button onClick={handleSubmit} className="cursor-pointer">
        <SendIcon />
      </button>
    </div>
  );
};
