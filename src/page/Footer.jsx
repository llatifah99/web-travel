import { Instagram, Facebook, Twitter } from "lucide-react";
const Footer = () => {
  return (
    <>
      <div>map</div>
      <div>
        <h1>Our Address:</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, autem?
        </p>
        <h1>Follow us:</h1>
        <div className="flex">
          <Instagram />
          <Facebook />
          <Twitter />
        </div>
      </div>
      <p>
        copyright{"\u00A9"}gocation{new Date().getFullYear()}
      </p>
    </>
  );
};

export default Footer;
