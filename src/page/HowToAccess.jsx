import CardHowToAccess from "../components/CardHowToAccess";
import { LayoutList } from "lucide-react";
const HowToAccess = () => {
  const items = [
    {
      id: 1,
      icon: <LayoutList size={96} />,
      text: "Select the desired service and fill in the required details accurately.",
    },
    {
      id: 2,
      icon: <LayoutList size={96} />,
      text: "Select the desired service and fill in the required details accurately.",
    },
    {
      id: 3,
      icon: <LayoutList size={96} />,
      text: "Select the desired service and fill in the required details accurately.",
    },
  ];
  return (
    <>
      <div
        className="bg-blue-001541
        flex flex-col items-center justify-center
        min-h-screen
        bg-cover
        bg-center
        items-center
        text-left
        px-6
        md:px-16
        py-16"
      >
        <h1 className="mb-8 text-4xl font-bold text-yellow-FFB729 text-center">
          How to Access Our Services?
        </h1>
        <CardHowToAccess items={items} />
      </div>
    </>
  );
};

export default HowToAccess;
