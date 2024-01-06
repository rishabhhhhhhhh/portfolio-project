import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import HeroImage from "../assets/developerGif.gif";
import { Link } from "react-scroll";
import DownloadButton from "./DownloadButton";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div>
          <h1 className="text-white sm:text-7xl">I'm a Full Stack developer</h1>
          <p className="text-gray-500 py-6 max-w-md">
            I have 3 years of experience building and designing software. In the
            past i have worked on ReactJS and Java. Currently, I love to work on
            web applications using technologies like ReactJS, NextJS, tailwind,
            Java etc.
          </p>
          <div className={"flex items-center m-2"}>
            <div>
              <DownloadButton />
            </div>
            <div>
              <Link
                to={"portfolio"}
                smooth
                duration={500}
                className="group w-fit text-white flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-4 rounded-md"
              >
                Portfolio
                <MdOutlineKeyboardArrowRight
                  size={25}
                  className="group-hover:rotate-90 duration-300 ml-1"
                />
              </Link>
            </div>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="My Portfolio"
            className="rounded-full mx-auto w-2/3 mt-5 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
