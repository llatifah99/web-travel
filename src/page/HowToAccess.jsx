import CardHowToAccess from "../components/CardHowToAccess";
import { LayoutList } from "lucide-react";
const HowToAccess = () => {
  const items = [
    {
      id: 1,
      icon: <LayoutList />,
      text: "Select the desired service and fill in the required details accurately.",
    },
    {
      id: 2,
      icon: <LayoutList />,
      text: "Select the desired service and fill in the required details accurately.",
    },
    {
      id: 3,
      icon: <LayoutList />,
      text: "Select the desired service and fill in the required details accurately.",
    },
  ];
  return (
    <>
      <div>
        <h1>How to Access Our Services</h1>
        <CardHowToAccess items={items} />
      </div>
    </>
  );
};

export default HowToAccess;
