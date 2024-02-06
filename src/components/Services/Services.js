import "./Services.css";
import heartemoji from "../../img/heartemoji.png";
import glasses from "../../img/glasses.png";
import humble from "../../img/humble.png";
import Card from "../Card/Card";
import resume from "./Resume_MohanSingh.pdf";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";

const Services = () => {
  const transition = { duration: 2, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id="Services">
      {/* left side */}
      <div className="awesome">
        <span style={{ color: darkMode && "white" }}>My Awesome</span>
        <span>Services</span>
        <span>
          <strong>Front-end development:</strong> Elevate digital presence with captivating frontend solutions. Utilizing React.js, Next.js, and Tailwind CSS, craft visually stunning interfaces. Expertise ensures pixel-perfect designs and seamless interactions.
          <br /><br /><strong>Back-end development:</strong> Empower applications with scalable backend solutions. Leveraging Node.js and Express.js, architect secure server-side systems. From database management to API development, deliver speed and reliability.
          <br /><br /><strong>Full-stack development:</strong> Experience seamless integration of frontend and backend technologies. With MERN stack expertise, including Next.js and Tailwind CSS, bring visions to life. From concept to deployment, ensure cohesive digital experiences.
        </span>
        <a href={resume} download>
          <button className="button s-button">Download CV</button>
        </a>

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right side */}
      <div className="cards">
        <motion.div
          whileInView={{ left: "18rem" }}
          initial={{ left: "28rem" }}
          transition={transition}
          style={{ left: "14rem" }}>
          <Card
            emoji={heartemoji}
            heading={"Language's"}
            detail={"C++, JavaScript, Basic of Python"}
          />
        </motion.div>
        <motion.div
          whileInView={{ left: "1rem", top: "12rem" }}
          initial={{ left: "1rem", top: "9rem" }}
          transition={transition}
          style={{ left: "-4rem", top: "12rem" }}>
          <Card
            emoji={glasses}
            heading={"Developer"}
            detail={"HTML, Tailwind CSS, JavaScript, MERN, NextJs, RestAPI"}
          />
        </motion.div>
        <motion.div
          whileInView={{ left: "16rem", top: "21rem" }}
          initial={{ left: "26rem", top: "21rem" }}
          transition={transition}
          style={{ left: "12rem", top: "19rem" }}>
          <Card
            emoji={humble}
            heading={"UI/UX"}
            detail={
              "Figma"
            }
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
