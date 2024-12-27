import { Text } from "../../Components";
import image from "../../images/card2/stats.svg";
const Card2 = () => {
  return (
    <div className="card card2 rounded-2xl w-full h-full bg-custom-gradient grid grid-cols-2 gap-2 text-xs md:text-base overflow-hidden py-6 md:py-11">
      <Text
        title="Smartlock"
        content="No more hassles with physical keys; generate access automatically."
        maxWidth="65ch"
        classes={"justify-center ps-7"}
      />
      <div className="card2__image-wrap flex justify-end relative">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default Card2;
