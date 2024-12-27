import { Text } from "../../Components";
import mobile from "../../images/card5/mobile.svg";
import profile from "../../images/card5/profile.png";
import bg from "../../images/card5/bg.svg";
const Card5 = () => {
  return (
    <div className="card card5 bg-custom-gradient rounded-2xl flex flex-col gap-6 justify-between">
      <Text
        title="Biometric check-in"
        content="The Check-In feature streamlines guest arrivals with quick and easy self-service options."
        maxWidth="65ch"
        classes={"justify-center ps-4 md:ps-7 pe-4 md:pe-9 pt-4 md:pt-10"}
      />

      <div className="card5__image-wrap ps-2 flex relative overflow-hidden">
        <img src={bg} alt="" className="card5__bg" />
        <img src={mobile} alt="" className="card5__mobile" />
        <img src={profile} alt="" className="card5__profile" />
      </div>
    </div>
  );
};

export default Card5;
