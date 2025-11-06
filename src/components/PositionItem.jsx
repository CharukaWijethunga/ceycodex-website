import React, { useState } from 'react';

const PositionItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="position-item">
      <div className="position-header" onClick={() => setIsOpen(!isOpen)}>
        <span className="position-title">{item.title}</span>
        <span className={`toggle-icon ${isOpen ? 'open' : ''}`}>▼</span>
      </div>
      {/* This logic replaces the classList.toggle() */}
      <div className={`position-content ${isOpen ? 'open' : ''}`}>
        <div className="position-description">
          {item.description}
        </div>
        <div className="position-footer">
          <button className="btn-apply">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default PositionItem;