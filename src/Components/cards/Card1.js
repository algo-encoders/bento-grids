import { Text } from "../../Components";
import image_first from "../../images/card1/image_first.svg";
import image_second from "../../images/card1/image_second.svg";

const Card1 = () => {
  return (
    <div className="card card1 col-span-1 md:col-span-3 row-span-1 md:row-span-2 bg-custom-gradient flex flex-col md:gap-6">
      <Text
        title="Channel manager"
        content="Easily collaborate with colleagues to quickly solve complex problems,
              as well as allow customers to track progress in real time."
        maxWidth="65ch"
        classes={"pt-5 md:pt-10 ps-5 pe-6"}
      />

      <div className="card1__image-wrap flex justify-end relative">
        <div className="card1__image-first md:pt-3 absolute w-full h-full flex justify-end">
          <img src={image_first} alt="" />
        </div>
        <div className="card1__image-second absolute w-full h-full flex justify-end">
          <img src={image_second} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Card1;
