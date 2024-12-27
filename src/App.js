import { useEffect } from "react";
import { gsap } from "gsap";
import { Card1, Card2, Card3, Card4, Card5, Card6 } from "./Components";

function App() {
  useEffect(() => {
    gsap.from(".box", {
      duration: 2,
      x: -200,
      opacity: 0,
      ease: "power2.out",
    });
  }, []);

  return (
    <section className="p-4 pt-28  pb-100">
      <div className="container mx-auto max-w-container flex flex-col gap-6 md:gap-9">
        <div className="flex flex-col md:grid grid-cols-1 md:grid-cols-2 grid-rows-3 md:grid-rows-2 gap-6 md:gap-9">
          <Card1 />
          <Card2 />
          <Card3 />
        </div>
        <div className="grid grid-col-1 md:grid-cols-3 gap-6 md:gap-9">
          <Card4 />
          <Card5 />
          <Card6 />
        </div>
      </div>
    </section>
  );
}

export default App;
