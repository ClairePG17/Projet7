import React, { useState } from "react";
import "./_collapse.scss";
import chevronImg from "../../assets/arrow.svg";

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => setIsOpen(!isOpen);

  return (
    <div className="collapse">
      <div className="collapse__header" onClick={toggleCollapse}>
        <span className="collapse__title">{title}</span>
        <img
          src={chevronImg}
          alt="chevron"
          className={`collapse__chevron${isOpen ? " is-open" : ""}`}
        />
      </div>
      {isOpen && <div className="collapse__content">{children}</div>}
    </div>
  );
}

export default Collapse;
