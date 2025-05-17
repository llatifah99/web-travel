import { HandHeart, Zap } from "lucide-react";
import CardWhyChooseUs from "../components/CardWhyChooseUs";
const WhyChooseUs = () => {
  const reasons = [
    {
      id: 1,
      icon: <HandHeart size={96} />,
      text: "Reliable services with exceptional quality",
    },
    {
      id: 2,
      icon: <Zap size={96} />,
      text: "Quick delivery and prompt response to your needs.",
    },
    {
      id: 3,
      icon: <HandHeart size={96} />,
      text: "Reliable services with exceptional quality",
    },
    {
      id: 4,
      icon: <Zap size={96} />,
      text: "Quick delivery and prompt response to your needs.",
    },
  ];
  return (
    <>
      <div className="bg-yellow-FFB729 min-h-screen bg-cover bg-center items-center text-left px-6 md:px-16">
        <h1 className="pt-24 pb-10 text-4xl font-bold text-blue-001541 text-center">
          Why Choose Us?
        </h1>
        <CardWhyChooseUs reasons={reasons} />
      </div>
    </>
  );
};

export default WhyChooseUs;
