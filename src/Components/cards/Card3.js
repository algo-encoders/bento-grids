import { Text } from "../../Components";
import stats from "../../images/card3/3stats.svg";
import company from "../../images/card3/company.svg";
import content from "../../images/card3/content.svg";
import cursor from "../../images/card3/cursor.svg";
import large_icon from "../../images/card3/large-download.svg";
import small_icon from "../../images/card3/small-down.svg";

const Card3 = () => {
  return (
    <div className="bg-custom-gradient card card3 rounded-2xl w-full h-full grid grid-cols-2 gap-2 text-xs md:text-base overflow-hidden">
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
