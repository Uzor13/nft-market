import React from 'react';
import Binance from '../../public/img/Binance_logo.png'
import Etherneum from '../../public/img/Ethereum logo.png'
import BlockChain from '../../public/img/Logo_of_Blockchain.io logo.png'
import Image from "next/image";

const Companies = () => {
    return (
        <section className="companies">
           <Image src={Binance}/>
           <Image src={Etherneum}/>
           <Image src={BlockChain}/>
        </section>
    );
};

export default Companies;
