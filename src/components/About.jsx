export default function About() {
  function handleKontakt() {
    alert("du har klikket på kontakt mig");
    console.log("knap klikket");
  }

  function handleDownload() {
    alert("Du har downloaded mit CV");
    console.log("downloadet CV");
  }
  return (
    <div className="about">
      <h1>
        Mathilde Kirstine <br />
        Rosted Poulsen
      </h1>
      <h2>
        <span id="age">24</span> - She/they - Aarhus
      </h2>
      <div className="about-main">
        <div className="kontakt-knapper">
          <button id="kontakt-mig" onClick={handleKontakt}>
            Kontakt mig
          </button>
          <button id="download-cv" onClick={handleDownload}>
            Download CV
          </button>
        </div>
        <p className="about-body">
          Jeg er Mathilde, frontend developer med fokus på innovation,
          nytænkning og design. For mig handler design, frontend og grafisk, om
          meget mere end æstetik, det handler om at skabe en smertefri og
          spændende oplevelse for kunder. <br />
          <br />
          Jeg prøver altid at tænke ud af boksen, samfundet bliver hurtigere og
          hurtigere, hvis ikke du kan skabe et spændende og interessant blikfang
          bliver man nemt overset. <br />
          Jeg brænder for design, det har altid være en interesse, men nu, som
          multimediedesign student har jeg fået en ny respekt og kærlighed for
          processen, fra ideen bliver tænk helt til jeg sidder med det færdige
          produkt. <br />
          <br />
          Kreativitet kan findes overalt i dagligdagen og jeg syntes ikke der
          findes noget bedre end at gå og kigge efter den næste inspiration.
        </p>
      </div>
    </div>
  );
}
