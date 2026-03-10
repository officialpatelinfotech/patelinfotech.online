import React from "react";
import "../styles/GlobalBackground.css";
import bgImage from "../assets/images/glass_prism_hero_bg.png";

const GlobalBackground = () => {
    return (
        <div className="global-bg-container">
            <div className="global-bg-image">
                <img src={bgImage} alt="" />
            </div>
            <div className="global-bg-overlay"></div>
        </div>
    );
};

export default GlobalBackground;
