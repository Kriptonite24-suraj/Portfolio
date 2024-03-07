import "./HeroImgStyles.css";
import IntroImg from "../assets/newHero.avif";
import React from 'react'
import { Link } from "react-router-dom";

const HeroImg = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img className="intro-img" src={IntroImg} alt="hero" />
            </div>
            <div className="content">
                <p>HI,I'M A FREELANCER.</p>
                <h1>React Developer.</h1>
                <div>
                    <Link to="/project"
                    className="btn">Project</Link>
                    <Link to="/contact"
                    className="btn btn-light">Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default HeroImg;