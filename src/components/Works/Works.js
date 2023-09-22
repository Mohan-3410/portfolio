import "./Works.css";
// import upwork from "../../img/Upwork.png";
// import fiverr from "../../img/fiverr.png";
// import amazon from "../../img/amazon.png";
import sportsClub from "../../img/sportsClub.png"
import oss from "../../img/ossClub.png"
import ait from "../../img/AIT.gif"
import techBoard from "../../img/techBoard.png"
import technincal from "../../img/technical.png"
// import shopify from "../../img/Shopify.png";
// import facebook from "../../img/Facebook.png";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";
const Works = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="works">
      <div className="awesome">
        <span style={{ color: darkMode && "white" }}>Works for All these</span>
        <span>Brands & Clients</span>
        <span>
        <strong>E-cell club</strong><br/>
        

Developed a basic website for the college's E-cell club using HTML, CSS, and ReactJs.
The website includes information about the club's mission, goals, and upcoming events.
The website also includes a contact form so that students can easily get in touch with the club.

<br/><br/><strong>Sports club</strong><br/>

Developed a basic website for the college's sports club using HTML, CSS, and JavaScript.
The website includes information about the club's different sports teams, as well as upcoming games and tournaments.
The website also includes a contact form so that students can easily get in touch with the club.
<br/><br/><strong>PBL projects</strong><br/>


Contributed to the development of several PBL projects, which involved designing and building web applications to solve real-world problems.
          
        </span>

        <button className="button s-button">Hire me</button>

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right side */}
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={technincal} alt="upwork" />
          </div>
          <div className="w-secCircle">
            <img src={oss} alt="fiverr" />
          </div>
          <div className="w-secCircle">
            <img src={ait} alt="amazon" />
          </div>
          <div className="w-secCircle">
            <img src={sportsClub} alt="shopify" />
          </div>
          <div className="w-secCircle">
            <img src={techBoard} alt="facebook" />
          </div>
        </motion.div>
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
