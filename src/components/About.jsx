import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-auto pb-16 text-white bg-gradient-to-b from-gray-800 to-black"
    >
      <div className="max-w-screen-lg mx-6 pb-6 md:mx-auto flex flex-col justify-center items-center">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I am Rishabh, an experienced software development engineer with over 3
          years of experience in full stack development. In the past I have
          worked with companies like Goldman Sachs, Amazon, and Microsoft. As a
          collaborative team player, I have successfully contributed to diverse
          teams, with an emphasis on effective communication of technology
          concepts for a successful work environment. Let's connect and work
          together to create something amazing!
        </p>
      </div>
    </div>
  );
};

export default About;
