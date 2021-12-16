import React from 'react';
import AboutImage from "./AboutImage";
import AboutContent from "./AboutContent";
import Title from "../UI/Title";

const About = () => {
    return (
        <section className="about-section">
            <Title title="About Us" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
            <div className="about-container">
                <AboutImage/>
                <AboutContent/>
            </div>
        </section>
    );
};

export default About;
