import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const Expand = ({ question, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="expand-container">
      <div 
        className="expand-header" 
        onClick={handleToggle}
      >
        <span className='text-orange-800'>{question}</span>
        {isExpanded ? <FaMinus /> : <FaPlus />}
      </div>

      {isExpanded && (
        <div className="expand-content ">
          {children}
        </div>
      )}
    </div>
  );
};

export default Expand;
