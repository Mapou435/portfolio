// Igen, Usikker på om vi må bruge kode fra andre, så vil lige outline at denne kode er lavet med Formspree's dokumentation.

import React, { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    fetch("https://formspree.io/f/movngvwy", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    })
      .then((res) => res.json())
      .then(() => {
        setSent(true);
        e.target.reset();
      });
  }

  return (
    <div className="kontakt-form">
      <h2>
        Kontakt Mig{" "}
        {/*
        <br />
        <span id="pil-kontakt">⭜</span>*/}
      </h2>
      {sent ? (
        <p>
          Tak for din interesse! <br /> Jeg vender tilbage hurtigst muligt.
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input name="name" type="text" placeholder="Dit Navn" required />
          <input name="email" type="email" placeholder="Din Email" required />
          <textarea name="message" placeholder="Besked" required />
          <button type="submit">Send</button>
        </form>
      )}
    </div>
  );
}
