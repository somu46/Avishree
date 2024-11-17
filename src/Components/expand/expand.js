import  { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import PropTypes from 'prop-types';



{/* eslint-disable-next-line react/no-unescaped-entities */}
const Expand = ({ question, children }) => {
  {/* eslint-disable-next-line react/no-unescaped-entities */}
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="expand-container ">
      <div 
        className="expand-header" 
        onClick={handleToggle}
      >
        <span className='text-red-500 font-mono '>{question}</span>
        {isExpanded ? <FaMinus /> : <FaPlus />}
      </div>

      {isExpanded && (
        <div className="expand-content  ">
          {children}
        </div>
      )}
    </div>
  );
};

Expand.propTypes = {
  question: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
export default Expand;
