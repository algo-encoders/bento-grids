import React, { useEffect, useRef } from "react";
import { Text } from "../../Components";
import image_first from "../../images/card1/image_first.svg";
import image_second from "../../images/card1/image_second.svg";
import gsap from "gsap";

const Card1 = () => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const imageFirst = card.querySelector(".card1__image-first");
    const imageSecond = card.querySelector(".card1__image-second");

    gsap.set(imageSecond, { opacity: 0 }); // Ensure the second image starts hidden

    // GSAP hover animation
    const handleMouseEnter = () => {
      gsap.to(imageFirst, { opacity: 0, duration: 0.5 });
      gsap.to(imageSecond, { opacity: 1, duration: 0.5 });
    };

    const handleMouseLeave = () => {
      gsap.to(imageFirst, { opacity: 1, duration: 0.5 });
      gsap.to(imageSecond, { opacity: 0, duration: 0.5 });
    };

    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="rounded-2xl justify-between card card1 w-full h-full row-span-1 md:row-span-2 bg-custom-gradient flex flex-col md:gap-6"
    >
      <Text
        title="Channel manager"
        content="Easily collaborate with colleagues to quickly solve complex problems,
              as well as allow customers to track progress in real time."
        maxWidth="65ch"
        classes={"pt-5 md:pt-10 ps-5 pe-6"}
      />
      <div className="card1__image-wrap flex justify-end relative">
        <div className="card1__image-first md:pt-3 absolute w-full h-full flex justify-end">
          <img src={image_first} alt="Image First" />
        </div>
        <div className="card1__image-second absolute w-full h-full flex justify-end">
          <img src={image_second} alt="Image Second" />
        </div>
      </div>
    </div>
  );
};

export default Card1;
