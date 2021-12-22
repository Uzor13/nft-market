import React from 'react';
import Image from "next/image";
import Abstract from '../../public/img/about.png'

const AboutImage = () => {
    return (
        <Image src={Abstract} width={500} height={600} placeholder="blur"/>
    );
};

export default AboutImage;
