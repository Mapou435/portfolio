import Karousel from "./karousel";

const items = [
  {
    image: "/img/project1.png",
    title: "Project One",
    subtitle: "React Carousel",
    text: "This is a dynamic carousel example.",
  },
  {
    image: "/img/project2.png",
    title: "Project Two",
    subtitle: "Animated Entry",
    text: "You can customize the animation and layout.",
  },
  // Add more items as needed
];

export default function Projects() {
  return (
    <div className="projects">
      <Karousel items={items} />
    </div>
  );
}
