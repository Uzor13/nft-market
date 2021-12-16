import React from 'react';

const Card = ({img, name, current_bid, price, creator}) => {
    return (
        <div className="card">
            <img src={img} alt={name}/>
            <div className="card-subtitle">
                <p>@{creator}</p>
                {current_bid ? <p>Current Bid</p> : null}

            </div>
            <div className="card-title">
                <h2>{name}</h2>
                <h2>{price} ETH</h2>
            </div>
            <button>Place a bid</button>
        </div>
    );
};

export default Card;
