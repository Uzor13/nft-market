import React from 'react';

const HeroContent = () => {
    return (
        <div className="hero-content">
            <h1>Create, Sell & Collect Your Own Creative NFT</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit.</p>
            <div className="hero-content__buttons">
                <button>Explore Now</button>
                <button>Sell NFT</button>
            </div>
            <div className="hero-content__stats">
                <div className="hero-content__stat">
                    <h1>37k+</h1>
                    <p>Artworks</p>
                </div>
                <div className="hero-content__stat">
                    <h1>20k+</h1>
                    <p>Artists</p>
                </div>
                <div className="hero-content__stat">
                    <h1>99k+</h1>
                    <p>Auctions</p>
                </div>
            </div>
        </div>
    );
};

export default HeroContent;
