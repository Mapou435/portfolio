// Jeg er ikke sikker på om Co-pilot/Github reposotories måtte bruges, så vil lige outline at denne kode "animatedtext.jsx" -
// - Er en modificeret version af af Rasmus' Animatedtext.jsx, modificationerne er lavet ved hjælp af Co-pilot.
// Jeg har skrevet efter for at lære og har fået alt forklaret, med det er *IKKE* min egen kode.

import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import "../css/Animatedtext.css";

export default function AnimatedText({ initialText, animatedTextArray }) {
  const containerRef = useRef(null);
  const typedInstances = useRef([]);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true); // fade out initial text

      // Start typing after fade
      if (containerRef.current) containerRef.current.innerHTML = "";
      typedInstances.current.forEach((instance) => instance.destroy());
      typedInstances.current = [];

      let currentLine = 0;
      function typeNextLine() {
        if (currentLine < animatedTextArray.length) {
          const lineSpan = document.createElement("span");
          lineSpan.className = "animated-text";
          containerRef.current.appendChild(lineSpan);

          const typed = new Typed(lineSpan, {
            strings: [animatedTextArray[currentLine]],
            typeSpeed: 30,
            showCursor: false,
            contentType: "html",
            onComplete: () => {
              currentLine++;
              containerRef.current.appendChild(document.createElement("br"));
              typeNextLine();
            },
          });
          typedInstances.current.push(typed);
        }
      }
      typeNextLine();
    }, 2000); // 5 seconds delay

    return () => {
      clearTimeout(timer);
      typedInstances.current.forEach((instance) => instance.destroy());
      typedInstances.current = [];
      if (containerRef) containerRef.innerHTML = "";
    };
  }, [animatedTextArray]);

  return (
    <div className="animated-text-container">
      <span className={`initial-text${hide ? " hide" : ""}`}>
        {initialText}
      </span>
      <div className="typed-overlay" ref={containerRef} />
    </div>
  );
}
