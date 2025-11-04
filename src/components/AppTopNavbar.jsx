// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { ShoppingCart, Headset, ClipboardClock } from "lucide-react";
export const AppTopNavbar = () => {
  return (
    <motion.div
      initial={{ y: -200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="my-2 me-2 flex h-20 items-center justify-between rounded-md border border-gray-600/20 shadow-md"
    >
      {/* tag menu */}

      {/* search input */}
      <input
        type="text"
        placeholder="Search....."
        className="rounded-md border border-blue-200 p-2 focus:border-blue-500 focus:outline-none"
      />
      {/* navigation menu */}
      <div className="mx-10 flex h-full w-1/3 items-center justify-end">
        {/* <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="p- flex h-full flex-wrap items-center justify-center gap-2 hover:bg-blue-300 hover:text-white"
        >
          <Headset className="h-6 w-6" />
          <span>Hotline 1900.5301</span>
        </motion.div> */}
        <div className="flex h-full cursor-pointer flex-wrap items-center justify-center gap-2 p-2 hover:bg-blue-300 hover:text-white active:bg-blue-700">
          <Headset className="h-6 w-6" />
          <span>Hotline 1900.5301</span>
        </div>
        <div className="flex h-full cursor-pointer flex-wrap items-center justify-center gap-2 p-6 hover:bg-blue-300 hover:text-white active:bg-blue-700">
          <ClipboardClock className="h-6 w-6" />
          <span>Buy History</span>
        </div>
        <div className="flex h-full cursor-pointer flex-wrap items-center justify-center gap-2 p-6 hover:bg-blue-300 hover:text-white active:bg-blue-700">
          <ShoppingCart className="h-6 w-6" />
          <span>Cart</span>
        </div>
        <button className="ms-12 h-12 w-20 rounded-md border border-blue-700 bg-blue-200 text-blue-800">
          Login
        </button>
      </div>
    </motion.div>
  );
};
