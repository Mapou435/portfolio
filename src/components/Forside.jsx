import Animatedtext from "./Animatedtext";

export default function Forside() {
  function handleKontakt() {
    if (window.location.hash === "#Kontakt") {
      window.location.hash = "";
      setTimeout(() => {
        window.location.hash = "#Kontakt";
      }, 10);
    } else {
      window.location.hash = "#Kontakt";
    }
    console.log("knap klikket");
  }
  return (
    <div className="forside">
      <div className="forside-layout">
        <img className="forside-image" src="/img/selfie.png" alt="" />
        <img className="forside-image" src="/img/knap.png" alt="KLIK MIG!" />
        <button onClick={handleKontakt} className="forside-knap">
          Klik Mig
        </button>
        <div className="forside-title">
          <p>This is</p>
          <Animatedtext
            initialText="ME"
            animatedTextArray={[
              "Frontend Development",
              "Multimedia Design",
              "UI/UX Strategy",
              "Curiosity Driven",
              "People Oriented",
              "Inclusive Thinking",
            ]}
          ></Animatedtext>
        </div>
      </div>
    </div>
  );
}
