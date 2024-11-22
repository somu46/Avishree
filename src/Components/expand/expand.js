import  { useState } from 'react';
import { MdOutlineKeyboardDoubleArrowDown ,MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

const Expand = ({ question, children }) => {

  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="expand-container ">
      <div className="expand-header" onClick={handleToggle} >
        <span className='text-red-500 font-mono '>{question}</span>
        {isExpanded ? <MdOutlineKeyboardDoubleArrowUp /> : <MdOutlineKeyboardDoubleArrowDown />}
      </div>

      {isExpanded && (
        <div className="expand-content  ">
          {children}
        </div>
      )}
    </div>
  );
};


export default Expand;
