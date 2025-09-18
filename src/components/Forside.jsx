export default function Forside() {
  return (
    <div className="forside">
      <div className="forside-layout">
        <img className="forside-image" src="/img/selfie.png" alt="" />
        <img className="forside-image" src="/img/knap.png" alt="KLIK MIG!" />
        <button className="forside-knap">Klik Mig</button>
        <div className="forside-title">
          <p>This is</p>
          <p className="me-p">ME</p>
        </div>
      </div>
    </div>
  );
}
