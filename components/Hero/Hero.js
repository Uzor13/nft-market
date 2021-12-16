import React from 'react';
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const Hero = () => {
    return (
        <section className="hero">
            <HeroContent/>
            <HeroImage/>
        </section>
    );
};

export default Hero;
