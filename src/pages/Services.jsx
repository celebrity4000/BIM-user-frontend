import React from "react";
import Navbar from "../components/Navbar";
import design from "../assets/services/design.png";
import operation from "../assets/services/operation.png";
import construction from "../assets/services/construction.png";
import projectsmain from "../assets/projects/projectsmain.png";
import courses from "../assets/courses/courses.png";
import Footer from "../components/Footer";
import building from "../assets/services/building.png";
import Contact from "../components/Contact";
import services1 from "../assets/services/services1.png";
import services2 from "../assets/services/services2.png";
import service1 from "../assets/services/service1.jpg";
import service2 from "../assets/services/service2.jpg";
import service3 from "../assets/services/service3.jpg";
import seven from "../assets/home/7.png";
import pinkIcon from "../assets/services/pink-icon.png";

const Services = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div className="h-64 w-full bg-gradient-to-r from-[#0B64BA] to-[#D1306B] flex justify-center items-center">
        <h1 className="text-white font-bold text-5xl text-center">
          Our <br /> Services
        </h1>
      </div>
      <div className="flex">
        <div className="w-[40%] py-32 pl-32 pr-10">
          <h1 className="font-bold text-lg mt-5">
            Enhancing Design, Construction and Operations Through BIM Solutions
          </h1>
          <h1 className="font-medium text-4xl">
            {" "}
            Your BIM Partner for all phases of construction project
          </h1>
          {/* <h1 className=" text-lg mt-10">
            Your BIM Partner for all phases of construction project
          </h1> */}
          <h1 className=" text-lg mt-5">
            At The BIM skills, we're more than just a company; we're a team of
            passionate trailblazers, driven by innovation and fueled by
            enthusiasm for cutting-edge technologies. With our dynamic blend of
            creativity and expertise, we're not just active participants in the
            tech realm—we're pioneering the way forward. Our team is a vibrant
            tapestry of diverse talents, united by a shared commitment to
            excellence and a relentless pursuit of innovavtion. From the latest
            advancements in Building Information Modeling (BIM) to emerging
            technologies shaping the future of our industries, we're at the
            forefront, exploring, experimenting, and pushing boundaries
          </h1>
        </div>

        <div className="w-[60%] py-32 pr-32 pl-10 flex flex-wrap gap-16">
          <div className="w-[40%] flex flex-col gap-3">
            <img src={design} alt="design" className="w-20 h-20" />
            <h1 className="font-bold text-lg">Design Phase</h1>
            <h1>
              Our BIM services optimize the design phase with precise 3D
              modeling, seamless collaboration, and streamlined documentation,
              ensuring efficient project delivery and superior quality outcomes.
            </h1>
          </div>
          <div className="w-[40%] flex flex-col gap-3">
            <img src={construction} alt="design" className="w-20 h-20" />
            <h1 className="font-bold text-lg">Construction Phase</h1>
            <h1>
              Through our BIM services, we facilitate precise 3D modeling and
              data integration, enhancing construction coordination, minimizing
              errors, and optimizing project efficiency.
            </h1>
          </div>
          <div className="w-[40%] flex flex-col gap-3">
            <img src={operation} alt="design" className="w-20 h-20" />
            <h1 className="font-bold text-lg">Operation Phase</h1>
            <h1>
              Utilizing our BIM services for operations and maintenance enables
              efficient facility management through comprehensive 3D models and
              integrated data, ensuring streamlined processes and optimized
              maintenance schedules.
            </h1>
          </div>
          <div className="w-[40%] bg-[#FF006B] rounded-md p-10">
            <h1 className="text-white text-4xl">50+</h1>
            <h1 className="text-white text-4xl">Organizations</h1>
            <h1 className="text-white text-lg font-bold">
              rely on BIM Services for their BIM needs
            </h1>
          </div>
        </div>
      </div>

      <div className="flex h-full">
        <div className="w-1/2 flex flex-col gap-5 px-16 p-10 bg-[#1761B6] relative">
          {/* <div className="flex flex-col gap-5  mx-16 absolute"> */}
          <h1 className="text-5xl font-medium text-white">
            Our Top BIM Services
          </h1>

          <h1 className="text-xl text-white">
            What sets us apart is not just our technical prowess, but our
            unwavering passion for what we do. We thrive on challenges, revel in
            exploration, and embrace every opportunity to learn and grow. With
            us, you're not just getting a team of experts, you're gaining a
            dedicated partner on a journey of discovery and transformation. Join
            us as we harness the power of technology to create solutions that
            inspire, empower, and shape the world of tomorrow. Together, let's
            innovate, let's explore, and let's build a future where
            possibilities are limitless.
          </h1>
          <h1 className="text-xl text-white">
            We offer BIM services for architectural, structural and MEP
            disciplinary. Our experienced team develops accurate virtual models
            through digitization that accelerate the construction process by
            improving project collaboration, accuracy and cost savings. We are
            well versed in an international standard to provide BIM across the
            globe.
          </h1>

          {/* service cards */}

          <div className="flex gap-2">
            <div className="w-[30%] bg-white rounded-md">
              <img
                src={service1}
                alt="courses"
                className="rounded-t-md h-40 w-48"
              />
              <h1 className="font-bold p-2">Architectural BIM services</h1>
            </div>
            <div className="w-[30%] bg-white rounded-md">
              <img
                src={service2}
                alt="courses"
                className="rounded-t-md h-40 w-48"
              />
              <h1 className="font-bold p-2">Structural BIM services</h1>
            </div>
            <div className="w-[30%] bg-white rounded-md">
              <img
                src={service3}
                alt="courses"
                className="rounded-t-md h-40 w-48"
              />
              <h1 className="font-bold p-2">MEP BIM services</h1>
            </div>
          </div>
          <div className="flex gap-5">
            <button className="border-2 p-2 rounded-md border-white">
              <h1 className="text-white font-bold">Explore Our BIM Services</h1>
            </button>
            <button className="p-2 rounded-md border-white bg-[#FF006B]">
              <h1 className="text-white font-bold">Request a Qoute</h1>
            </button>
          </div>
          {/* </div> */}
        </div>
        <div className=" w-1/2 flex  justify-end ">
          <img src={services1} alt="projectsmain" className="w-full" />
        </div>
      </div>

      <div className="flex mt-10">
        <img src={services2} alt="building" className="w-1/2" />
        <div className="bg-gradient-to-r from-[#0B64BA] to-[#D1306B] flex flex-col w-1/2  gap-28  p-10 ">
          <h1 className="text-6xl font-semibold text-white">
            Our <span className="text-[#D1306B]">Values :</span>
          </h1>
          <div className="flex gap-8 flex-wrap justify-center">
            <div className="flex gap-4">
              <img src={pinkIcon} className="" />
              <h1 className="text-4xl font-semibold text-white">Honesty</h1>
            </div>
            <div className="flex gap-4">
              <img src={pinkIcon} className="" />
              <h1 className="text-4xl font-semibold text-white">Excellence</h1>
            </div>
            <div className="flex gap-4">
              <img src={seven} className="" />
              <h1 className="text-4xl font-semibold text-white">Agility</h1>
            </div>
            <div className="flex gap-4">
              <img src={pinkIcon} className="" />
              <h1 className="text-4xl font-semibold text-white">Reliability</h1>
            </div>
            <div className="flex gap-4">
              <img src={seven} className="" />
              <h1 className="text-4xl font-semibold text-white">TeamWork</h1>
            </div>
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default Services;
