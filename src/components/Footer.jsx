import React from "react";
import logo from "../assets/footer/logo.png"; // Adjust the path to your logo
import { FaYoutube } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#000D82] text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-10 px-5 sm:px-10">
        {/* Company Intro and Logo */}
        <div>
          <img src={logo} alt="Company Logo" className="w-32 sm:w-48 mb-4" />
          <p className="text-gray-400 text-base sm:text-lg">
            The BIM skills is an innovative, Value driven, Real-Time Project
            Oriented, Quality Based BIM Training & Consulting Company. Copyright
            © 2024 . All rights reserved | The BIM skills
          </p>
          <div className="flex items-center gap-4 my-4">
            <Link
              target="blank"
              to="https://www.youtube.com/@thebimskills814"
              className="hover:text-gray-400"
            >
              <FaYoutube className="h-6 w-6" />
            </Link>
            <Link
              target="blank"
              to="https://www.facebook.com/thebimskills"
              className="hover:text-gray-400"
            >
              <ImFacebook2 className="h-5 w-5" />
            </Link>
            <Link
              target="blank"
              to="https://www.instagram.com/thebimskills/"
              className="hover:text-gray-400"
            >
              <FaInstagram className="h-6 w-6" />
            </Link>
            <Link
              to="https://www.linkedin.com/company/the-bim-skills-tbs/"
              target="blank"
              className="hover:text-gray-400"
            >
              <FaLinkedin className="h-6 w-6" />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="sm:col-span-1">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
            Quick Links
          </h3>
          <ul className="space-y-2 pt-5 text-base sm:text-lg">
            <li>
              <a href="#" className="text-gray-200 hover:underline">
                Teach on The BIM skills
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-200 hover:underline">
                Get the app
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-200 hover:underline">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-200 hover:underline">
                Contact us
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div className="sm:col-span-1">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
            Support
          </h3>
          <ul className="space-y-2 pt-5 text-base sm:text-lg">
            <li>
              <a href="#" className="text-gray-200 hover:underline">
                Sitemap
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-200 hover:underline">
                Featured courses
              </a>
            </li>

            <li>
              <a href="#" className="text-gray-200 hover:underline">
                Join Us
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className="sm:col-span-1">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
            Services
          </h3>
          <ul className="space-y-2 pt-5 text-base sm:text-lg">
            <li>
              <a href="#" className="text-gray-200 hover:underline">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-200 hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-200 hover:underline">
                Help and Support
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-200 hover:underline">
                Terms
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-200 hover:underline">
                Certificate Verification
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-200 hover:underline">
                Free Courses
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-[#000D82] text-center py-3 text-sm sm:text-base">
        Design and Developed by Bits & Gigs
      </div>
    </div>
  );
};

export default Footer;
