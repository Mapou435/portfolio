import { useEffect, useRef } from "react";
import Typed from "typed.js";
import "../css/Animatedtext.css";

export default function AnimatedText({ initialText, animatedTextArray }) {
  const containerRef = useRef(null);
  const typedInstances = useRef([]);

  useEffect(() => {
    if (containerRef.current) containerRef.current.innerHTML = "";
    typedInstances.current.forEach((instance) => instance.destroy());
    typedInstances.current = [];

    let currentLine = 0;

    function typeNextLine() {
      if (currentLine < animatedTextArray.length) {
        const [left, right] = animatedTextArray[currentLine].split("|");
        const lineDiv = document.createElement("div");
        lineDiv.className = "animated-flex-line";

        const leftSpan = document.createElement("span");
        leftSpan.className = "animated-text left";
        lineDiv.appendChild(leftSpan);

        const rightSpan = document.createElement("span");
        rightSpan.className = "animated-text right";
        lineDiv.appendChild(rightSpan);

        containerRef.current.appendChild(lineDiv);

        const typedLeft = new Typed(leftSpan, {
          strings: [left],
          typeSpeed: 50,
          showCursor: false,
          contentType: "html",
          onComplete: () => {
            const typedRight = new Typed(rightSpan, {
              strings: [right],
              typeSpeed: 50,
              showCursor: false,
              contentType: "html",
              onComplete: () => {
                currentLine++;
                typeNextLine();
              },
            });
            typedInstances.current.push(typedRight);
          },
        });
        typedInstances.current.push(typedLeft);
      }
    }

    typeNextLine();

    return () => {
      typedInstances.current.forEach((instance) => instance.destroy());
      typedInstances.current = [];
      if (containerRef) containerRef.innerHTML = "";
    };
  });

  return (
    <div className="animated-text-container">
      <span className="initial-text">{initialText}</span>
      <div className="typed-overlay" ref={containerRef} />
    </div>
  );
}
