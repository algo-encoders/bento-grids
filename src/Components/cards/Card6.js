import { Text } from "../../Components";
import bg from "../../images/card6/bg.svg";
import mobile from "../../images/card6/mobile.png";
import header from "../../images/card6/header.png";
import wifi from "../../images/card6/wifi.svg";

const Card6 = () => {
  return (
    <div className="card card6 bg-custom-gradient rounded-2xl flex flex-col gap-6 justify-between">
      <Text
        title="Guest app"
        content="The Guest App lets guests manage bookings and access services easily from their mobile devices."
        maxWidth="65ch"
        classes={"justify-center ps-4 md:ps-7 pe-4 md:pe-9 pt-4 md:pt-10"}
      />

      <div className="card6__image-wrap ps-2 flex relative overflow-hidden">
        <div className="card6__bg-wrap absolute overflow-hidden">
          <img src={bg} alt="" className="card6__bg" />

          <img src={header} alt="" className="card6__header" />
          <img src={mobile} alt="" className="card6__mobile" />
          <img src={wifi} alt="" className="card6__wifi" />
          <img src={wifi} alt="" className="card6__wifi-2" />
        </div>
      </div>
    </div>
  );
};

export default Card6;
