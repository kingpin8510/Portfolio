import React from "react";
import AboutImg from "../assets/about-img.png";

const About = () => {
  return (
    <section className="bg-secondery text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            About Me
          </h2>

          <p className="pb-5">
            Hello! I'm Rakesh Pradhan, a web developer with a strong passion for
            creating engaging and user-friendly websites. I specialize in
            crafting clean, efficient code and designing seamless digital
            experiences.
          </p>
          <p className="pb-5">
            My expertise includes HTML, CSS, JavaScript, ReactJS, Tailwind CSS
            and much more ,and I'm always eager to expand my knowledge and
            explore new technologies. I thrive on turning innovative ideas into
            reality and believe in the power of collaboration to bring out the
            best in any project.
          </p>

          <p>
            In my free time, I enjoy exploring design trends and continuously
            honing my skills to stay ahead in the ever-evolving world of web
            development.
          </p>

          <p>Let's work together to build something extraordinary !!</p>
        </div>

        <div className="about-img">
          <img
            src={AboutImg}
            alt="coding illustration"
            className="lgw-[80%] md:ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
