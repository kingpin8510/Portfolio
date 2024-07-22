import React from "react";
import HeroImg from "../assets/hero-img.png";
import Typed from "typed.js";

import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineMail,
  AiOutlineInstagram,
} from "react-icons/ai";

const Hero = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["<i>Frontend</i>", "<i>Sql</i>", "<i>Python</i>"],
      typeSpeed: 50,
    });
  }, []);

  return (
    <section className="bg-primary px-16 text-white py-32">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="text-4xl lg:text-6xl">
            Hi, <br />I am <span className="text-accent">R</span>akesh <br />
            <span ref={el} /> <br /> Developer
          </h1>

          <p className="py-5">Welcome to this portfolio !!</p>

          {/* <a
              href="https://www.linkedin.com/in/rkp2508"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineLinkedin size={40} />{" "}
            </a>
            <a
              href="https://github.com/kingpin8510"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineGithub size={40} />{" "}
            </a>
            <a
              href="mailto:rp240479@gmail.com"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineMail size={40} />{" "}
            </a> */}
          <div className="flex py-10 ">
            <ul class="example-2">
              <li class="icon-content">
                <a
                  href="https://linkedin.com/"
                  aria-label="LinkedIn"
                  data-social="linkedin"
                >
                  <div class="filled"></div>
                  <AiOutlineLinkedin size={60} />{" "}
                </a>
                <div class="tooltip">LinkedIn</div>
              </li>

              <li class="icon-content">
                <a
                  href="https://www.github.com/"
                  aria-label="GitHub"
                  data-social="github"
                >
                  <div class="filled"></div>
                  <AiOutlineGithub size={60} />{" "}
                </a>
                <div class="tooltip">GitHub</div>
              </li>

              <li class="icon-content">
                <a
                  href="https://www.instagram.com/"
                  aria-label="Instagram"
                  data-social="instagram"
                >
                  <div class="filled"></div>
                  <AiOutlineInstagram size={60} />{" "}
                </a>
                <div class="tooltip">Instagram</div>
              </li>
            </ul>
          </div>

          <a
            href="/#projects"
            className=" btn bg-accent  border-2 border-[#7477FF] text-white px-6 py-3 hover:bg-transparent"
          >
            See Projects
          </a>
        </div>

        <div className="hero-img">
          <img
            src={HeroImg}
            alt="coding illustration"
            className="lgw-[80%] ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
