// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { FunnelPlus, FunnelX } from "lucide-react";
import { useState } from "react";
import { DropdownMenu } from "./DropdownMenu";
const dummyTagsData = [
  {
    id: "1",
    name: "Keyboard",
  },
  {
    id: "2",
    name: "Mouse",
  },
  {
    id: "3",
    name: "Monitor",
  },
  {
    id: "4",
    name: "Laptop",
  },
  {
    id: "5",
    name: "Shoes",
  },
  {
    id: "6",
    name: "Clothes",
  },
];
export const AdvanceFilter = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const handelOpen = () => {
    setOpenFilter((prev) => !prev);
  };
  return (
    <>
      <motion.button
        onClick={handelOpen}
        className={`flex justify-around border p-2 rounded-md cursor-pointer ${
          !openFilter
            ? "border-blue-600 bg-blue-50 hover:bg-blue-100"
            : "border-red-600 bg-red-50 hover:bg-red-100"
        }`}
      >
        {!openFilter ? (
          <>
            <span className="text-blue-700">Advance Filter</span>
            <FunnelPlus className="w-6 h-6 text-blue-700" />
          </>
        ) : (
          <>
            <span className="text-red-700">Clear</span>
            <FunnelX className="w-6 h-6 text-red-700" />
          </>
        )}
      </motion.button>
      <AnimatePresence initial={false}>
        {openFilter ? (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="w-full flex flex-col gap-2 rounded-md"
          >
            {/* tag selection */}
            <div className="">
              <label>Tags</label>
              <DropdownMenu data={dummyTagsData} />
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};
