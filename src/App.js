import { useEffect } from "react";
import { gsap } from "gsap";
import { Card1, Card2 } from "./Components";

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
      <div className="container mx-auto max-w-container">
        <div className="grid grid-cols-1 md:grid-cols-6 grid-rows-6 md:grid-rows-3 gap-4">
          <Card1 />
          <Card2 />
          <div className="col-span-1 md:col-span-3 md:col-start-4 md:row-start-2 p-4 bg-custom-gradient">
            3
          </div>
          <div className="col-span-1 md:col-span-2 md:row-start-3 p-4 bg-custom-gradient">
            4
          </div>
          <div className="col-span-1 md:col-span-2 md:col-start-3 md:row-start-3 p-4 bg-custom-gradient">
            5
          </div>
          <div className="col-span-1 md:col-span-2 md:col-start-5 md:row-start-3 p-4 bg-custom-gradient">
            6
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
