import "../css/karousel.css";
import React, { useState } from "react";

export default function Karousel({ items }) {
  const [active, setActive] = useState(0);
  const length = items.length;

  const next = () => setActive((prev) => (prev + 1) % length);
  const prev = () => setActive((prev) => (prev - 1 + length) % length);

  return (
    <div className="karousel-box">
      <img
        src="./img/portfolio-baggrund-2.png"
        alt=""
        className="karousel-background"
      />
      <div className="karousel-main">
        <img
          src={items[active].image}
          alt={items[active].name}
          className="karousel-image"
        />
        <div className="karousel-hero">
          <h2 className="karousel-title">{items[active].name}</h2>
          <h3 className="karousel-subtitle">{items[active].subtitle}</h3>
          <p className="karousel-body">{items[active].body}</p>
          <a
            className="karousel-link"
            href={items[active].links[0]?.url || "#"}
            target="_blank"
          >
            {items[active].links[0]?.text || "Se mere her"}
          </a>
        </div>
      </div>
      <div className="arrows">
        <button className="prev-arrow" onClick={prev}>
          🡸
        </button>
        <button className="next-arrow" onClick={next}>
          🡺
        </button>
      </div>
    </div>
  );
}
