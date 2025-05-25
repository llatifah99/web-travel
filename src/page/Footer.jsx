import { Instagram, Facebook, Twitter } from "lucide-react";
const Footer = () => {
  return (
    <>
      {/* https://maps.app.goo.gl/bi6NEUkLwJtw9gpk8 */}
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6258.183729600708!2d112.41306987664944!3d-7.120356592883367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e77f0b2f360079f%3A0x8fd4797dc49fa630!2sTaman%20Alun-Alun%20Kota%20Lamongan!5e1!3m2!1sid!2sid!4v1748181950006!5m2!1sid!2sid"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
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
