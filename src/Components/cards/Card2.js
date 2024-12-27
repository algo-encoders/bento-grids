import React, { useEffect, useRef } from "react";
import { Text } from "../../Components";
import image from "../../images/card2/stats.svg";
import gsap from "gsap";

const Card2 = () => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const imageWrap = card.querySelector(".card2__image-wrap");

    // GSAP hover animation
    const handleMouseEnter = () => {
      gsap.to(imageWrap, {
        scale: 1.45,
        xPercent: 39,
        duration: 0.5,
        ease: "ease-out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(imageWrap, {
        scale: 1,
        xPercent: 0,
        duration: 0.5,
        ease: "ease-out",
      });
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
      className="card card2 rounded-2xl w-full h-full bg-custom-gradient grid grid-cols-2 gap-2 text-xs md:text-base overflow-hidden py-6 md:py-11"
    >
      <Text
        title="Smartlock"
        content="No more hassles with physical keys; generate access automatically."
        maxWidth="65ch"
        classes={"justify-center ps-7"}
      />
      <div className="card2__image-wrap flex justify-end relative">
        <img src={image} alt="Stats" />
      </div>
    </div>
  );
};

export default Card2;
