import { Text } from "../../Components";
const Card2 = () => {
  return (
    <div className="col-span-1 md:col-span-3 md:col-start-4 p-4 bg-custom-gradient">
      <Text
        title="Smartlock"
        content="No more hassles with physical keys; generate access automatically."
        maxWidth="65ch"
        classes={"pt-5 md:pt-10 ps-5 pe-6"}
      />
    </div>
  );
};

export default Card2;
