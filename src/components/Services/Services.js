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
        <strong>Front-end development:</strong> I have strong experience in ReactJS, a popular JavaScript library for building user interfaces. I can use React to create fast, interactive, and user-friendly interfaces for your web applications.
<br /><br /><strong>Back-end development:</strong> I am currently learning Node.js, Express.js, and MongoDB, which are popular technologies for building back-end web applications in JavaScript. I am eager to use these technologies to build robust and scalable back-ends for your applications.
<br /><br /><strong>Full-stack development:</strong> I have the skills and experience to develop both the front-end and back-end of your web applications. This means that I can be your one-stop shop for all of your web development needs.
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
            detail={"HTML, CSS, JavaScript, ReactJs, Redux, NodeJs, ExpressJs, RestAPI"}
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
              "Lorem ispum dummy text are usually use in section where we need some random text"
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
