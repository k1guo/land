import React from "react";
import {
  IconMail,
  IconBrandInstagram,
  IconBrandX,
} from "@tabler/icons-react";

const Footer = () => {
  return (
    <footer className="bg-white py-8 mt-48">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <span className="font-bold text-xl mb-2">Curiomate</span>
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div className="space-y-3">
            <p className="font-semibold">FIND US</p>
            <p>Dashboard</p>
            <p>Twitter</p>
            <p>Email</p>
          </div>

          <div className="space-y-3">
            <p className="font-semibold">LEGAL</p>
            <div className="space-y-3">
              <a href="/terms" className="hover:text-gray-800">
                Terms{" "}
              </a>
            </div>
            <div className="space-y-3">
              <a href="/privacy-policy" className="hover:text-gray-800">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
        {/* 一条分界线 */}
        <div className="flex justify-between items-center mt-16 border-t border-gray-200 pt-8">
          <p className=" text-gray-600 text-sm">
            Made by Curiomate · All rights reserved.
          </p>
          <div className="flex space-x-4">
            {/* Social media icons */}
            <IconBrandX color="gray" size={24} />
            <IconBrandInstagram color="gray" size={24} />
            <IconMail color="gray" size={24} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
