import { useEffect, useRef } from "react";
import Typed from "typed.js";
import "../css/Animatedtext.css";

export default function Animatedtext() {
  const el = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "<span class='frontend-text'>Designer.</span>",
        "<span class='frontend-text'>Frontend Developer.</span>",
        "<span class='frontend-text'>React Enthusiast.</span>",
        "<span class='frontend-text'>UI/UX Explorer.</span>",
        "<span class='frontend-text'>Problem Solver.</span>",
        "<span class='frontend-text'>Team Player.</span>",
      ],
      typeSpeed: 50,
      backSpeed: 0,
      backDelay: 1000,
      startDelay: 500,
      smartBackspace: false,
      fadeOut: false,
      loop: true,
      showCursor: false,
      bindInputFocusEvents: false,
      contentType: "html",
    };

    const typed = new Typed(el.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return <div ref={el} />;
}
