import React from "react";
import "../styles/GlobalBackground.css";
import bgVideo from "../assets/videos/3163534-hd_1920_1080_30fps.mp4";

const GlobalBackground = () => {
    return (
        <div className="global-bg-container">
            <div className="global-bg-image">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    aria-hidden="true"
                >
                    <source src={bgVideo} type="video/mp4" />
                </video>
            </div>
            <div className="global-bg-overlay"></div>
        </div>
    );
};

export default GlobalBackground;
