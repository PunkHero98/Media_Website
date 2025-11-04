// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import logo from "../assets/buyverse_logo.jpg";
import { Bell, Sun } from "lucide-react";
import { AdvanceFilter } from "./AdvanceFilter";
export const AppSideNavbar = () => {
  return (
    <motion.div
      initial={{ x: -200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="h-[98vh] border flex flex-col gap-2 border-gray-600/20 rounded-md w-50 my-2 ms-2 shadow-md"
    >
      {/* logo section */}
      <div className="w-full flex flex-col items-center">
        <img src={logo} className="w-30 h-30" />
        <div className="flex gap-6">
          <Sun className="h-6 w-6" />
          <Bell className="h-6 w-6" />
        </div>
      </div>

      {/* separator */}
      <div className="w-full px-4 my-4">
        <div className="border-t border-blue-400"></div>
      </div>

      {/* search input */}
      <div className="w-full flex flex-col px-2 gap-2">
        <input
          type="text"
          placeholder="Search....."
          className="border border-blue-200 rounded-md p-2 focus:outline-none focus:border-blue-500"
        />
        <AdvanceFilter />
      </div>
    </motion.div>
  );
};
