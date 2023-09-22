import "./Intro.css";

import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/collegeBoy.png"
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";
const Intro = () => {
  const linkedinLink = "https://www.linkedin.com/in/mohan-singh-70106b228"
  const githubLink = "https://github.com/Mohan-3410"
  const instagramLink = "https://www.instagram.com/mohan1034.in/"

  const transition = { duration: 2, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode && "white" }}>Hy! I Am</span>
          <span>Mohan Singh</span>
          <span>
          A web developer with a strong focus on ReactJS and a passion for learning new technologies. I am currently learning Node.js, Express.js, and MongoDB, and I am eager to use these technologies to build robust and scalable web applications.
          </span>
        </div>
        <button className="button i-button">Hire me</button>
        <div className="i-icons">
        <a href={githubLink}><img src={Github} alt="github" /></a>
        <a href={linkedinLink}><img src={LinkedIn} alt="LinkdIn" /></a>
        <a href={instagramLink}><img src={Instagram} alt="Instagram" /></a>
          
          
          
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="vector1" />
        <img src={Vector2} alt="vector2" />
        <img src={boy} alt="boy" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt="glassesimoji"
        />
        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          style={{ top: "-4%", left: "68%" }}
          className="floating-div"
        >
          <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
        </motion.div>
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "1rem" }}
          transition={transition}
          style={{ top: "18rem", left: "1rem" }}
          className="floating-div"
        >
          <FloatingDiv image={thumbup} txt1="Best Design" txt2="Award" />
        </motion.div>
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
