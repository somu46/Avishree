import React, { useState } from 'react';
import { MdOutlineKeyboardDoubleArrowDown, MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

const Expand = ({ question, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-sm mb-4 transition-shadow duration-300 ease-in-out hover:shadow-md cursor-pointer">
      <div className="flex justify-between items-center" onClick={handleToggle}>
        <span className="text-red-500 font-mono">{question}</span>
        {isExpanded ? <MdOutlineKeyboardDoubleArrowUp size={25} /> : <MdOutlineKeyboardDoubleArrowDown size={25} />}
      </div>
      <div className={`overflow-hidden transition-max-height duration-1000 ease-in-out ${isExpanded ? 'max-h-screen' : 'max-h-0'}`}>
        {isExpanded && (
          <div className="pt-4">
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export default Expand;
