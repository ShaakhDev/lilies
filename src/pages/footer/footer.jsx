import React from "react";
import appstore from "../../../public/App Store Badge.svg";
import playmarket from "../../../public/Google Play Badge.svg";
import instagram from "../../../public/instagram.svg";
import twitter from "../../../public/twitter.svg";
import youtube from "../../../public/youtube.svg";
export const Footer = () => {
  return (
    <footer className="bg-darkBlue text-white">
      <div className="max-w-[1110px] mx-auto px-[24px] py-[48px]">
        <div className="flex justify-between mb-[68px]">
          <div>
            <h3 className="text-[18px] mb-[24px] font-semibold">Company</h3>
            <ul className="text-[14px] text-white2 flex flex-col gap-[12px]">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-[18px] mb-[24px] font-semibold">Support</h3>
            <ul className="text-[14px] text-white2 flex flex-col gap-[12px]">
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Safety Center</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-[18px] mb-[24px] font-semibold">Legal</h3>
            <ul className="text-[14px] text-white2 flex flex-col gap-[12px]">
              <li>
                <a href="#">Cookies Policy</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">Dispute resolution</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-[18px] mb-[24px] font-semibold">Install App</h3>
            <a href="#">
              <img className="mb-[18px]" src={appstore} alt="img" />
            </a>
            <a href="#">
              <img src={playmarket} alt="img" />
            </a>
          </div>
        </div>

        <div className="flex justify-between items-center mt">
          <div className="text-[14px] text-white2 ">
            © 2021 LILIES, All rights reserved
          </div>
          <div className="flex gap-[24px]  ">
            <a href="#">
              <img src={instagram} alt="img" />
            </a>
            <a href="#">
              <img src={twitter} alt="img" />
            </a>
            <a href="#">
              <img src={youtube} alt="img" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
