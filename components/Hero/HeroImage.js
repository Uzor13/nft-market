import React from 'react';
import Image from "next/image";
import SideImage from '../../public/img/heroimage.png'

const HeroImage = () => {
    return (
        <Image src={SideImage} className="hero-img" alt=""/>
    );
};

export default HeroImage;

