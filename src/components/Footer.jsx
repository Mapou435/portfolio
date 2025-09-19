import React, { useState, useEffect } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [kontakt, setKontakt] = useState([]);

  useEffect(() => {
    fetch("/data/links.json")
      .then((res) => res.json())
      .then((data) => setKontakt(data.kontakt));
  }, []);

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
      <div className="kontakt-info">
        <h2>
          Klar til en
          <br />
          snak?
        </h2>
        <div className="bottom-form-links">
          {kontakt[0] && (
            <>
              <p>
                <span className="type-kontakt">Email: </span>
                {kontakt[0].email}
              </p>
              <p>
                <span className="type-kontakt">Telefon: </span>
                {kontakt[0].telefon}
              </p>
              <p>
                <span className="type-kontakt">Navn: </span>
                {kontakt[0].name}
              </p>
              <p>
                <span className="type-kontakt">LinkedIn: </span>
                {kontakt[0].linkedin}
              </p>
            </>
          )}
        </div>
      </div>
      <div className="kontakt-form-side">
        {sent ? (
          <p>
            Tak for din interesse! <br /> Jeg vender tilbage hurtigst muligt.
          </p>
        ) : (
          <form onSubmit={handleSubmit}>
            <p id="form-title">
              Det er jeg <span id="pil-kontakt">⭜</span>
            </p>
            <input name="name" type="text" placeholder="Dit Navn" required />
            <input name="email" type="email" placeholder="Din Email" required />
            <textarea name="message" placeholder="Besked" required />
            <button type="submit">Send</button>
          </form>
        )}
      </div>
    </div>
  );
}
