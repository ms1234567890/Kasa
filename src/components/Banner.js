import React from "react";
import "../assets/css/Banner.css";

function Banner({image, texte}) {
    return(
        <div className="banner">
            <img className="banner-img" src={image} alt="Banner"/>
            <div className="banner-overlay"></div>
            <span className="banner-txt">{texte}</span>
        </div>
    );
}

export default Banner;