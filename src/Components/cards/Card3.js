import React, { useEffect, useRef } from "react";
import { Text } from "../../Components";
import stats from "../../images/card3/3stats.svg";
import company from "../../images/card3/company.svg";
import content from "../../images/card3/content.svg";
import cursor from "../../images/card3/cursor.svg";
import large_icon from "../../images/card3/large-download.svg";
import small_icon from "../../images/card3/small-down.svg";
import gsap from "gsap";

const Card3 = () => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const contentWrap = card.querySelector(".content__wrap");
    const statsEl = card.querySelector(".stats");
    const companyEl = card.querySelector(".company");
    const cursorEl = card.querySelector(".cursor");
    const smallIconEl = card.querySelector(".small_icon");
    const largeIconEl = card.querySelector(".large_icon");

    // Create a GSAP timeline
    const timeline = gsap.timeline({ paused: true });

    // Define the animation steps
    timeline
      .to(contentWrap, {
        bottom: "30%",
        width: "95%",
        duration: 0.5,
        ease: "ease-out",
      })
      .to(statsEl, { right: "-8px", duration: 0.5, ease: "ease-out" }, "<")
      .to(
        companyEl,
        { top: "17%", left: "0", duration: 0.5, ease: "ease-out" },
        "<"
      )
      .to(
        cursorEl,
        {
          bottom: "26%",
          right: "9%",
          opacity: 1,
          duration: 0.5,
          ease: "ease-out",
        },
        "<"
      )
      .to(
        smallIconEl,
        {
          right: "24%",
          bottom: "48%",
          scale: 0.7,
          opacity: 0,
          duration: 0.5,
          ease: "ease-out",
        },
        "<"
      )
      .to(
        largeIconEl,
        { right: "5%", opacity: 1, duration: 0.5, ease: "ease-out" },
        "<"
      );

    // Set default styles for reversal
    gsap.set(contentWrap, { width: "75%" }); // Explicitly set the initial value

    // Add event listeners for mouseenter and mouseleave
    const handleMouseEnter = () => timeline.play();
    const handleMouseLeave = () => timeline.reverse();

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
      className="bg-custom-gradient card card3 rounded-2xl w-full h-full grid grid-cols-2 gap-2 text-xs md:text-base overflow-hidden"
    >
      <Text
        title="Invoices"
        content="Invoice your guests conveniently right after their stay with just a few clicks."
        maxWidth="65ch"
        classes={"justify-center ps-7"}
      />
      <div className="card3__image-wrap flex justify-end relative overflow-hidden">
        <img src={stats} alt="stats" className="stats absolute" />
        <img src={company} alt="company" className="company absolute" />
        <div className="relative content__wrap">
          <img src={content} alt="content" className="content" />
          <img
            src={large_icon}
            alt="large_icon"
            className="large_icon absolute"
          />
          <img
            src={small_icon}
            alt="small_icon"
            className="small_icon absolute"
          />
        </div>
        <img src={cursor} alt="Invoices" className="absolute cursor" />
      </div>
    </div>
  );
};

export default Card3;
