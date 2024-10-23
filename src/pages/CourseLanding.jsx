import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import { TfiArrowTopRight } from "react-icons/tfi";
import { GoArrowRight } from "react-icons/go";
import { FiPhoneCall } from "react-icons/fi";
import group from "../assets/courses/group.png";
import sticker1 from "../assets/courses/sticker1.png";
import sticker2 from "../assets/courses/sticker2.png";
import { HiOutlineGlobe } from "react-icons/hi";
import { GiGraduateCap } from "react-icons/gi";
import { MdWorkOutline } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import realWorldProject from "../assets/courses/real-world-projects.jpg";
import globeIcon from "../assets/courses/globe-icon.png";
import remoteIcon from "../assets/courses/remote-icon.png";
import wayIcon from "../assets/courses/way-icon.png";
import computerIcon from "../assets/courses/computer-icon.png";
import sideIcon from "../assets/courses/side-icon.png";
import courses from "../assets/courses/courses.png";
import CourseCard from "../components/CourseCard";
import seven from "../assets/home/7.png";
import logo1 from "../assets/courses/logo1.png";
import logo2 from "../assets/courses/logo2.png";
import logo3 from "../assets/courses/logo3.png";
import logo4 from "../assets/courses/logo4.png";
import logo5 from "../assets/courses/logo5.png";
import logo6 from "../assets/courses/logo6.png";
import logo7 from "../assets/courses/logo7.png";
import logo8 from "../assets/courses/logo8.png";
import logo9 from "../assets/courses/logo9.png";
import logo10 from "../assets/courses/logo10.png";
import mentor1 from "../assets/courses/mentor1.png";
import mentor2 from "../assets/courses/mentor2.png";
import mentor3 from "../assets/courses/mentor3.png";
import mentor4 from "../assets/courses/mentor4.png";
import mentor5 from "../assets/courses/mentor5.png";
import mentor6 from "../assets/courses/mentor6.png";
import review1 from "../assets/courses/review1.png";
import review2 from "../assets/courses/review2.png";
import review3 from "../assets/courses/review3.png";
import review4 from "../assets/courses/review4.png";
import bgImage from "../assets/courses/bgImage.png";
import onlinetraining from "../assets/home/online.jpg";
import offlinetraining from "../assets/home/offline.jpg";
import { Slide } from "react-slideshow-image";
import course3 from "../assets/courses/course3.png";
import course4 from "../assets/courses/course4.png";

const spanStyle = {
  padding: "20px",
  background: "#efefef",
  color: "#000000",
};

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "400px",
};
const slideImages = [
  {
    title: "Offline BIM Certification Program!",
    desc: "Our training dives deep into practical, real-world projects, providing you with in-depth experience and skills that employers value.",
    url: offlinetraining,
    caption: "Slide 2",
  },
  {
    title: "Online BIM Certification Program!",
    desc: "Our training dives deep into practical, real-world projects, providing you with in-depth experience and skills that employers value.",
    url: onlinetraining,
    caption: "Slide 3",
  },
];

const courseData = [
  {
    id: 1,
    image: course4,
    subtitle: "For Architects & Civil Engineer",
    title: "International BIM Coordinator Training & Internship",
    rating: 5,
    reviews: 123,
    price: "RS 29,999",
    oldPrice: "RS 1,00,000",
  },
  {
    id: 2,
    image: course3,
    subtitle: "For Mechanical & Electrical Engineer",
    title: "International BIM Coordinator Training & Internship",
    rating: 5,
    reviews: 123,
    price: "RS 29,999",
    oldPrice: "RS 1,00,000",
  },
];

const CourseLanding = () => {
  const navigate = useNavigate();
  // useEffect(() => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // }, []);
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      {/* hero section */}

      <Slide arrows={false} autoplay={true} duration={2000}>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              className="min-h-[90vh] relative p-20 flex justify-start m-10 rounded-xl "
              // style={{
              //   // background: "linear-gradient(to right, #0666BD, #D92E68)",
              //   background: `url(${mainbg}) no-repeat center center/cover`,
              // }}

              style={{
                ...divStyle,
                backgroundImage: `url(${slideImage.url})`,
              }}
            >
              <div className="w-full flex flex-col gap-5 ">
                <h1 className="text-7xl font-normal text-white w-[53%]">
                  {slideImage.title}
                </h1>
                <h1 className="text-xl w-[50%] text-white">
                  {slideImage.desc}
                </h1>
                <div className=" flex gap-10 mt-10  w-full">
                  <button
                    onClick={() => {
                      navigate("/courses");
                    }}
                    className="flex gap-2 items-center justify-center text-xl text-white font-semibold px-4 py-2 rounded-md w-[300px] bg-black"
                    // style={{
                    //   background: "linear-gradient(to top, black, black, white)",
                    //   border: "1px solid #FF006B",
                    // }}
                  >
                    Explore BIM Training
                    <TfiArrowTopRight />
                  </button>
                  <button
                    onClick={() => {
                      navigate("/services");
                    }}
                    className="flex gap-2 items-center justify-center text-xl text-white font-semibold px-4 py-2 rounded-md w-[300px] bg-black"
                  >
                    Explore BIM Services
                    <TfiArrowTopRight />
                  </button>
                </div>
              </div>

              <img
                src={sticker1}
                className=" absolute w-48 rounded-xl right-[20%] top-40"
              />
            </div>
          </div>
        ))}
      </Slide>

      {/* impact section */}
      <div className=" mb-20  pl-40 relative">
        {/* <div
          className="h-full w-[3px] absolte left-36"
          style={{
            background: `linear-gradient(to bottom, #E5C360, #DA45C2, #6938EF)`,
          }}
        /> */}
        <div className=" top-20 left-36 w-[80%] text-center flex justify-center items-center gap-10 ">
          {/* <div className="bg-white">
            <img src={sideIcon} className="my-1" alt="sideIcon" />
          </div> */}
          <div>
            {/* <h1 className="text-lg">Our Impact</h1>
            <h1 className="text-4xl font-bold">Moving the Needle with</h1> */}
            <h1 className="text-4xl font-bold text-[#FF006B]">
              Leading Innovation in AEC Education
            </h1>
            <h1 className="text-xl">
              Leading Innovation in AEC Education At The BIM Skills Company, we
              are revolutionizing the way architecture, engineering, and
              construction (AEC) professionals learn and grow. Through our
              advanced training programs, we empower individuals to harness the
              latest technological advancements, driving innovation and
              excellence in the industry. Discover endless possibilities and
              elevate your career with our forward-thinking education solutions.
            </h1>
          </div>
        </div>
      </div>

      {/* achievements card */}
      <div className="px-40 pb-20 flex justify-between ">
        <div className="pr-14 pl-10 pb-5 pt-10 w-[300px] border border-blue-200  flex flex-col gap-6 shadow-xl rounded-xl">
          <h1 className="text-7xl text-blue-600 ">20+</h1>
          <h1 className="text-xl">Countries Global Reach</h1>
          <HiOutlineGlobe size={30} color="FF006B" className="" />
        </div>
        <div className="pr-14 pl-10 pb-5 pt-10 w-[300px] border border-blue-200  flex flex-col gap-6 shadow-xl rounded-xl">
          <h1 className="text-7xl text-blue-600 ">1000+</h1>
          <h1 className="text-xl">Career Transformations</h1>
          <GiGraduateCap size={30} color="FF006B" className="" />
        </div>
        {/* <div className="pr-14 pl-10 pb-5 pt-10 w-[300px] border border-blue-200  flex flex-col gap-6 shadow-xl rounded-xl">
          <h1 className="text-7xl text-blue-600 ">100+</h1>
          <h1 className="text-xl">Projects Completed</h1>
          <MdWorkOutline size={30} color="FF006B" className="" />
        </div> */}
        <div className="pr-14 pl-10 pb-5 pt-10 w-[300px] border border-blue-200  flex flex-col gap-6 shadow-xl rounded-xl">
          <h1 className="text-7xl text-blue-600 ">5/5</h1>
          <h1 className="text-xl">Star rating from all over Globe</h1>
          <FaRegStar size={30} color="FF006B" className="" />
        </div>
      </div>

      {/* marque text  */}

      <div className="marquee-wrapper overflow-hidden whitespace-nowrap relative mb-10">
        <div className="marquee-content animate-marquee">
          <div className="flex gap-20">
            <div className="flex gap-5 items-center">
              <img src={seven} alt="one" className="w-10 h-10" />
              <h1 className="text-blue-600 text-5xl font-bold">
                Practical Knowledge
              </h1>
            </div>
            <div className="flex gap-5 items-center">
              <img src={seven} alt="one" className="w-10 h-10" />
              <h1 className="text-blue-600 text-5xl font-bold">
                Guidance from Industry Experts
              </h1>
            </div>
            <div className="flex gap-5 items-center">
              <img src={seven} alt="one" className="w-10 h-10" />
              <h1 className="text-blue-600 text-5xl font-bold">
                Career Acceleration
              </h1>
            </div>
            <div className="flex gap-5 items-center">
              <img src={seven} alt="one" className="w-10 h-10" />
              <h1 className="text-blue-600 text-5xl font-bold">
                Continuous Support
              </h1>
            </div>
            <div className="flex gap-5 items-center">
              <img src={seven} alt="one" className="w-10 h-10" />
              <h1 className="text-blue-600 text-5xl font-bold">
                International Projects
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* our courses  */}

      <div className="flex flex-col gap-5 items-center">
        <h1 className="text-xl text-blue-600 font-semibold">
          OUT TOP BIM COURSES
        </h1>
        <h1 className="text-4xl font-bold text-[#FF006B]">
          Build a Brighter Future with The BIM skills
        </h1>
        <h1 className="text-xl w-2/3 text-center">
          Join our comprehensive, live project-based International BIM
          Coordinator Training & Internship Program designed for architects and
          civil engineers. Starting from the 1st week of September 2024 at 9:30
          PM, this program ensures you gain in-depth knowledge and hands-on
          experience with international BIM standards.
        </h1>
      </div>

      <div className=" relative min-h-[70vh]  justify-center flex ">
        <div className="flex w-[50%] absolute z-10 space-x-8 py-10  justify-between">
          {courseData.map((course, index) => (
            <CourseCard
              image={course.image}
              subtitle={course.subtitle}
              title={course.title}
              rating={course.rating}
              reviews={course.reviews}
              price={course.price}
              oldPrice={course.oldPrice}
              id={course.id}
            />
          ))}
        </div>

        <div className="w-[30%] z-0 -left-10 bottom-20 absolute h-12 bg-blue-600 transform -rotate-6" />
        <div className="w-[30%] z-0 -left-10 bottom-36 absolute h-12 bg-blue-600 transform -rotate-6" />

        <div className="w-[30%] z-0 -right-10 top-20 absolute h-12 bg-blue-600 transform -rotate-6" />
        <div className="w-[30%] z-0 -right-10 top-40 absolute h-12 bg-blue-600 transform -rotate-6" />

        <div className="w-[60%] z-0 -right-10 top-36 absolute h-12 bg-[#FF006B] transform -rotate-6" />
      </div>

      {/* mentors section  */}

      {/* <div>
        <div className="p-20">
          <div className="flex gap-4 items-center">
            <h1 className="text-xl">Expert Mentors</h1>
            <div className="h-[2px] w-60 bg-black " />
          </div>
          <h1 className="font-semibold text-4xl">
            Learn from the{" "}
            <span className="text-blue-600">Industry's Best</span>
          </h1>
          <h1 className="text-xl w-1/2">
            Our mentors are industry experts with experience at top-tier AEC
            firms and on major projects worldwide.
          </h1>
        </div>

        <div className="marquee-wrapper overflow-hidden whitespace-nowrap relative mb-10">
          <div className="marquee-content animate-marquee">
            <div className="flex gap-20">
              <img src={logo1} alt="logo1" />
              <img src={logo2} alt="logo1" />
              <img src={logo3} alt="logo1" />
              <img src={logo4} alt="logo1" />
              <img src={logo5} alt="logo1" />
              <img src={logo6} alt="logo1" />
              <img src={logo7} alt="logo1" />
              <img src={logo8} alt="logo1" />
              <img src={logo9} alt="logo1" />
              <img src={logo10} alt="logo1" />
            </div>
          </div>
        </div>

        <div className=" overflow-x-scroll m-10 no-scrollbar">
          <div className="flex gap-20">
            <img src={mentor1} alt="logo1" />
            <img src={mentor2} alt="logo1" />
            <img src={mentor3} alt="logo1" />
            <img src={mentor4} alt="logo1" />
            <img src={mentor5} alt="logo1" />
            <img src={mentor6} alt="logo1" />
          </div>
        </div>
        <div className="h-[40vh] pl-40 relative">
          <div
            className="h-full w-[3px] absolte left-36"
            style={{
              background: `linear-gradient(to bottom, #E5C360, #DA45C2, #6938EF)`,
            }}
          />
          <div className="absolute top-20 left-36 w-1/2 flex items-center gap-10 ">
            <div className="bg-white">
              <img src={sideIcon} className="my-1" alt="sideIcon" />
            </div>
            <div>
              <div className="flex items-center gap-5">
                <h1 className="text-lg">Alumni Voices</h1>
                <div className="h-[1px] w-40 bg-black" />
              </div>
              <h1 className="text-4xl font-semibold">
                Hear our <span className="text-blue-600">community</span> talk
                about their{" "}
                <span className="text-blue-600">upskilling journeys</span>
              </h1>
            </div>
          </div>
        </div>
        <div className=" overflow-x-scroll m-10 no-scrollbar">
          <div className="flex gap-20">
            <img src={review1} alt="logo1" className="rounded-md" />
            <img src={review2} alt="logo1" className="rounded-md" />
            <img src={review3} alt="logo1" className="rounded-md" />
            <img src={review4} alt="logo1" className="rounded-md" />
          </div>
        </div>
      </div> */}

      {/* training section  */}

      <div
        className="h-[15vh]"
        style={{
          background: "linear-gradient(to right, #0666BD, #D92E68)",
        }}
      ></div>

      <div className="flex shadow-lg">
        <div className="w-1/2 h-full">
          <div className="px-14 pt-20">
            <div className="flex items-center gap-5">
              <h1 className="text-lg">Practical Training</h1>
              <div className="bg-black h-[2px] w-32" />
            </div>
            <h1 className="text-3xl font-semibold ">
              Gain Global Experience with{" "}
              <span className="text-[#FF006B]">Real-World Project</span>
            </h1>
            <h1 className="text-xl">
              Want to become a BIM expert? The BIM skills offers you the unique
              opportunity to work on real-world projects from international
              cities. Our courses are designed to provide hands-on experience,
              significantly enhancing your portfolio and giving you a
              competitive edge in the industry. By tackling diverse and
              challenging projects, you'll gain practical skills and global
              insights, preparing you to excel in the BIM field.
            </h1>
          </div>

          <div className="flex px-14 ">
            <div className="w-1/2 p-2">
              <img src={globeIcon} />
              <h1 className="text-xl font-semibold my-4">
                International Project
              </h1>
              <div className="h-[1px] w-full bg-gray-400" />
              <h1>
                Our live projects are curated in partnership with leading AEC
                firms based in the US, Hong Kong and Portugal.
              </h1>
            </div>
            <div className="w-1/2 p-2">
              <img src={remoteIcon} />
              <h1 className="text-xl font-semibold my-4">Practical Approach</h1>
              <div className="h-[1px] w-full bg-gray-400" />
              <h1>
                Experience project management and innovation in a dynamic
                virtual simulation environment.
              </h1>
            </div>
          </div>
          <div className="flex px-14 pb-10">
            <div className="w-1/2 p-2">
              <img src={computerIcon} />
              <h1 className="text-xl font-semibold my-4">In-depth Sessions</h1>
              <div className="h-[1px] w-full bg-gray-400" />
              <h1>
                Engage in immersive, detailed sessions to master project
                management and innovative solutions.
              </h1>
            </div>
            <div className="w-1/2 p-2">
              <img src={wayIcon} />
              <h1 className="text-xl font-semibold my-4">
                High Level of BIM Standards
              </h1>
              <div className="h-[1px] w-full bg-gray-400" />
              <h1>
                Achieve excellence with top-tier BIM standards in all project
                phases and details.
              </h1>
            </div>
          </div>
        </div>
        <img src={realWorldProject} className="w-1/2" />
      </div>

      <div className=" pl-40 relative my-16">
        {/* <div
          className="h-full w-[3px] absolte left-36"
          style={{
            background: `linear-gradient(to bottom, #E5C360, #DA45C2, #6938EF)`,
          }}
        /> */}
        <div className=" top-20 left-36 w-1/2 flex  gap-10 ">
          <div className=" w-[100%] ">
            <img src={sideIcon} className="my-1 w-14 h-14 " alt="sideIcon" />
          </div>
          <div>
            <h1 className="text-lg">Mastering BIM</h1>
            <h1 className="text-4xl font-semibold">
              A Transformative Learning Journey
            </h1>
            <h1 className="text-xl">
              At The BIM skills, we revolutionize learning by integrating
              cutting-edge digital tools with modern pedagogies. Our training
              program in Building Information Modeling (BIM) goes beyond
              traditional methods, ensuring a transformative educational
              experience. Through hands-on modules and real-world projects,
              participants gain proficiency in leading BIM software and
              collaborative workflows. This approach not only enhances technical
              skills but also prepares individuals to innovate and excel in
              today's dynamic AEC industry.
            </h1>
          </div>
        </div>
      </div>

      <Contact />
      <Footer />
    </div>
  );
};

export default CourseLanding;
