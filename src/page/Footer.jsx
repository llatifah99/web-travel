import { Instagram, Facebook, Twitter } from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-[#001541] text-[#D0D3D9] px-8 md:px-16 py-10">
      <div className="flex flex-col md:flex-row gap-8 md:gap-16">
        <div className="w-full md:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6258.183729600708!2d112.41306987664944!3d-7.120356592883367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e77f0b2f360079f%3A0x8fd4797dc49fa630!2sTaman%20Alun-Alun%20Kota%20Lamongan!5e1!3m2!1sid!2sid!4v1748181950006!5m2!1sid!2sid"
            className="w-full h-[300px] rounded-md"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-start">
          <div>
            <h2 className="text-xl font-semibold mb-2">Our Address</h2>
            <p className="mb-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
              sed suscipit at corporis unde ex.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Follow Us</h2>
            <div className="flex gap-4 text-white">
              <a href="#" aria-label="Instagram">
                <Instagram className="hover:text-yellow-FFB729" />
              </a>
              <a href="#" aria-label="Facebook">
                <Facebook className="hover:text-yellow-FFB729" />
              </a>
              <a href="#" aria-label="Twitter">
                <Twitter className="hover:text-yellow-FFB729" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm">
        {"\u00A9"} gocation {new Date().getFullYear()} &mdash; All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
