import "./Portfolio.css"
import { Swiper, SwiperSlide } from "swiper/react"
import keeperApp from "../../img/keeperApp.png"
import googleFormClone from "../../img/googleFormClone.png"
import expenseTrackerApp from "../../img/expenseTrackerApp.png"
import foodOrderingApp from "../../img/foodOrderingApp.png"
import socialMediaApp from "../../img/socialMedia.png"
import stackOverflowApp from "../../img/stackoverflow.png"
import ecommerceApp from "../../img/poster.png"
import "swiper/css"
import { themeContext } from "../../Context";
import { useContext } from "react";

const Portfolio = () => {
    const stackOverFlowAppLink = "https://github.com/Mohan-3410/stackoverflow.git"
    const foodOrderingAppLink = "https://food-order-app-three-sigma.vercel.app/"
    const googleFormCloneLink = "https://google-form-mocha.vercel.app/"
    const expenseTrackerAppLink = "https://expenses-tracker-coral.vercel.app/"
    const keeperAppLink = "https://keeper-app-mauve.vercel.app/"
    const socialMediaAppLink = "https://github.com/Mohan-3410/social-media.git"
    const ecommerceAppLink = "https://github.com/Mohan-3410/ecommerce.git"
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="portfolio" id="Portfolio">
            <span style={{ color: darkMode && 'white' }}>Recent Projects</span>
            <span>Portfolio</span>
            {/* swiper */}
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                grabCursor={true}
                className="portfolio-slider"
            >
                <SwiperSlide>
                    <a href={ecommerceAppLink} ><img src={ecommerceApp} alt="sidebar" /></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href={socialMediaAppLink}><img src={socialMediaApp} alt="ecommerce" /></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href={stackOverFlowAppLink} ><img src={stackOverflowApp} alt="sidebar" /></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href={foodOrderingAppLink}><img src={foodOrderingApp} alt="sidebar" /></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href={keeperAppLink}><img src={keeperApp} alt="ecommerce" /></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href={googleFormCloneLink}><img src={googleFormClone} alt="musicApp" /></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href={expenseTrackerAppLink}><img src={expenseTrackerApp} alt="hoc" /></a>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Portfolio;