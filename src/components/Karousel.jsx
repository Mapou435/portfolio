import "../css/karousel.css";
import React, { useState } from "react";

export default function Karousel({ items }) {
  const [active, setActive] = useState(0);
  const length = items.length;

  const next = () => setActive((prev) => (prev + 1) % length);
  const prev = () => setActive((prev) => (prev - 1 + length) % length);

  return (
    <div className="karousel-box">
      <div className="karousel-main">
        <img
          src={items[active].image}
          alt={items[active].title}
          className="karousel-image"
        />
        <div className="karousel-hero">
          <h2 className="karousel-title">{items[active].title}</h2>
          <h3 className="karousel-subtitle">{items[active].subtitle}</h3>
          <p className="karousel-text">{items[active].text}</p>
        </div>
      </div>
      <button className="prev-arrow" onClick={prev}>
        &lt;
      </button>
      <button className="next-arrow" onClick={next}>
        &gt;
      </button>
    </div>
  );
}
