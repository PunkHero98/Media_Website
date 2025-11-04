import { SquareArrowOutUpRight } from "lucide-react";
import { useState } from "react";
export const DropdownMenu = ({ data }) => {
  const [selectedList, setSelectedList] = useState([]);
  const handleToggle = (id) => {
    const item = data.find((item) => item.id === id);
    if (!item) return;

    setSelectedList((prev) => {
      const alreadySelected = prev.some((i) => i.id === id);
      if (alreadySelected) {
        return prev.filter((i) => i.id !== id);
      } else {
        return [...prev, item];
      }
    });
  };

  return (
    <div className="flex flex-col gap-1 ">
      {/* left section */}
      <div className="flex flex-col">
        <input className=" border border-blue-700 rounded-xs" />
        {data && data.length > 1 ? (
          data.map((item, index) => (
            <div
              className="flex gap-2"
              data-index={index}
              key={`${index}-${item.name}`}
            >
              <input
                type="checkbox"
                checked={selectedList.some((i) => i.id === item.id)}
                onChange={() => handleToggle(item.id)}
              />
              <span>{item.name}</span>
            </div>
          ))
        ) : (
          <>
            <SquareArrowOutUpRight className="w-6 h-6" />
            No Tags Exist
          </>
        )}
      </div>
      {/* right section */}
      <div className="border border-gray-200 flex flex-wrap gap-1">
        {selectedList &&
          selectedList.map((item, index) => (
            <span
              className="px-3 py-1 text-sm bg-blue-100 rounded-full"
              key={index}
            >
              {item.name}
            </span>
          ))}
      </div>
    </div>
  );
};
