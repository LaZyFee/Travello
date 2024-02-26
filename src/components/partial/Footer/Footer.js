import React from "react";
import logo from "../../../assests/image/logo/logo.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 grid">
        <div>
          <div className="flex items-center">
            <img src={logo} alt="logo" className="w-[60px] h-[60px]" />
            <p className="text-xl font-bold">BROMO SMART TOUR</p>
          </div>
          <p>
            We provide tour packages around East Java for domestic <br /> and
            international tourists.
          </p>
        </div>
        <div className="grid-cols-1  md:grid-cols-2 gap-2 md:gap-20">
          <div>
            <h3 className="text-xl font-bold">Contacts</h3>
            <p className="mb-3">Phone: +6282143261091</p>
            <p className="mb-3">Email: bromosunrise@gmail.com</p>
            <p className="mb-3">
              Address: Jl. Graha Pelita Asri No.B-30,<br /> Pandanwangi, Kec.
              Blimbing, <br />Kota Malang
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Social</h3>
            <div className=" flex gap-4 ">
              <FaFacebook />
              <FaInstagram />
              <FaTwitter />
            </div>
            <p className="mt-4">Follow us for the latest news and <br />updates.</p>
          </div>
        </div>
      </footer>
      <hr />
      <div className="grid mx-10 mt-3 mb-5">
        <div>
          <p className="order-2 lg:order-none mt-3">
            © Copyright 2024 LaZyFee. All rights reserved.
          </p></div>
        <div className="flex gap-4 lg:justify-end order-1 lg:order-none">
          <Link>About us</Link>
          <Link>Privacy Policy</Link>
          <Link>Terms & Conditions </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
