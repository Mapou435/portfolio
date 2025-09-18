import { useEffect, useState } from "react";
import Karousel from "./karousel";

export default function Projects() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/data/projects.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div className="projects">
      {items.length > 0 ? (
        <Karousel items={items} />
      ) : (
        <p>Indhold kunne ikke indlæses</p>
      )}
    </div>
  );
}
