import "../css/karousel.css";
import React, { useState } from "react";

export default function Karousel({ items }) {
  const [active, setActive] = useState(0);
  const length = items.length;

  const next = () => setActive((prev) => (prev + 1) % length);
  const prev = () => setActive((prev) => (prev - 1 + length) % length);

  return (
    <div className="carousel-container">
      <button className="carousel-arrow left" onClick={prev}>
        &lt;
      </button>
      <div className="carousel-slide">
        <img
          src={items[active].image}
          alt={items[active].title}
          className="carousel-image"
        />
        <div className="carousel-content">
          <h2 className="carousel-title">{items[active].title}</h2>
          <h3 className="carousel-subtitle">{items[active].subtitle}</h3>
          <p className="carousel-text">{items[active].text}</p>
        </div>
      </div>
      <button className="carousel-arrow right" onClick={next}>
        &gt;
      </button>
    </div>
  );
}
