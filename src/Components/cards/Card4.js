import { Text } from "../../Components";
import mobile from "../../images/card4/mobile.svg";
import card from "../../images/card4/card.svg";
const Card4 = () => {
  return (
    <div className="card card4 bg-custom-gradient rounded-2xl flex flex-col justify-between gap-3 md:gap-0">
      <Text
        title="Mobile app"
        content="Collaborate efficiently with teammates in real time thanks to co-presence indicators, notes, and @mentions.."
        maxWidth="65ch"
        classes={"justify-center ps-4 md:ps-7 pe-4 md:pe-9 pt-4 md:pt-10"}
      />

      <div className="card4__image-wrap ps-2 flex relative">
        <img src={mobile} alt="" className="mobile-image" />
        <img src={card} alt="" className="card-image" />
      </div>
    </div>
  );
};

export default Card4;
