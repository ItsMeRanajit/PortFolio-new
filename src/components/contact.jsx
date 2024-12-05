import React from "react";
import Image from "next/image";

import mail from "../app/images/mail.png";
import phone from "../app/images/phone.png";

const contact = () => {
  return (
    <div className="max-w-full md:max-w-[70%] mx-auto justify-between items-center flex flex-col lg:flex-row text-white/70 p-8 font-fontLogo " id="contact">
      <div className="flex justify-center items-center mb-10">
        <ul className="space-y-4 ">
          <li className="flex items-center">
            <Image src={phone} alt="phone" className="md:h-[110px] h-20 w-auto mr-6 " />
            <p className="md:text-lg text-sm">+91-8777091965</p>
          </li>

          <li className="flex items-center">
            <Image src={mail} alt="mail" className="md:h-[110px] h-20 w-auto mr-6 " />
            <div className="md:text-lg text-sm">
              {" "}
              <a href="mailto:ranajit104das@gmail.com" target="_blank">
                {" "}
                ranajit104das@gmail.com
              </a>
              <p className="text-white/40 mt-2 text-xs">Click on the mailId to directly send mail</p>
            </div>
          </li>
        </ul>
      </div>

      <div className="bg-white/20 p-6 rounded-xl max-w-[550px] font-fontLogo3 tracking-wider">
        <h2 className="text-5xl font-bold text-orange-400 mb-4 font-fontLogo">Let&apos;s connect</h2>
        <p className="text-white/70 mb-6">Send me a message</p>

        <form action="https://getform.io/f/bjjjywkb" method="POST" className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input type="text" name="name" className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-orange-400" required placeholder="First Name" />
            <input type="text" name="name" className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-orange-400" placeholder="Last Name" />
            <input type="email" name="email" className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-orange-400" required placeholder="Email" />
            <input type="phone" name="phone" className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-orange-400" placeholder="Phone" />
          </div>

          <textarea name="" className="bg-black/70 rounded-xl p-3 w-full focus:outline-none focus:ring-orange-400" placeholder="Your message" id=""></textarea>
          <button className="btn-custom w-full font-fontLogo">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default contact;
