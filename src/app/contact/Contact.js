import React from "react";
import { Link } from "react-router-dom";
import banner from "../../assests/banner/banner-2.png";
import {
  FaChevronRight,
  FaLocationArrow,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";
const Contact = () => {
  return (
    <section>
      <div className={"relative overflow-hidden"}>
        <div className="w-full h-80 relative">
          <img
            src={banner}
            alt="banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute w-full h-full top-0 left-0 flex flex-col items-center justify-center px-24 bg-purple-950/40">
            <h2 className="text-3xl font-bold text-white mb-4">Contact Us</h2>
            <div className="text-md text-white breadcrumbs">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <FaChevronRight />
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={"mx-auto max-w-7xl mt-10 container px-4 py-8"}>
        <div className={"grid grid-cols-1 md:grid-cols-2"}>
          <div>
            <h1 className={"text-3xl font-bold mb-6"}>Contact Us</h1>
            <p className={"text-lg mb-6 font-light"}>
              We are open{" "}
              <span className={"font-bold"}> anytime and every day.</span> You
              can contact us through the following contacts.
            </p>
            <ul className={"space-y-4"}>
              <li className={"flex items-center text-gray-600"}>
                <h2 className={"text-xl font-bold"}>
                  <FaLocationArrow className={"inline-block mr-2"} size={18} />
                </h2>
                <p className={"text-base font-light"}>
                  Jl. Graha Pelita Asri No.B-30, Pandanwangi, Kec. Blimbing,
                  Kota Malang
                </p>
              </li>
              <li className={"flex items-center text-gray-600"}>
                <h2 className={"text-xl font-bold"}>
                  <FaMailBulk className={"inline-block mr-2"} size={18} />
                </h2>
                <p
                  className={
                    "text-base font-light text-purple-700 hover:underline"
                  }
                >
                  <Link href={"mailto:bromosunrise@gmail.com"}>
                    bromosunrise@gmail.com
                  </Link>
                </p>
              </li>
              <li className={"flex items-center text-gray-600"}>
                <h2 className={"text-xl font-bold"}>
                  <FaPhone className={"inline-block mr-2"} size={18} />
                </h2>
                <p className={"text-base font-light"}>
                  <Link href={"tel:+628123456789"}>
                    +628123456789 (Call/WhatsApp)
                  </Link>
                </p>
              </li>
            </ul>
          </div>
          <div>
            <section className={"rounded-lg overflow-hidden"}>
              <div>
                <iframe
                  className={"shadow-md rounded-2xl w-full h-[32rem]"}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1077.2725144561477!2d112.65774125233672!3d-7.952057991848402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd629abf70f3fe9%3A0x1a73271241c8507d!2sVinny%20Bromo%20Sunrise%20Adventure%20tours!5e0!3m2!1sid!2sid!4v1705159746057!5m2!1sid!2sid"
                  loading="lazy"
                  title="Google Map"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
