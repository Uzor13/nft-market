import React from 'react';


const Card = ({img, name, current_bid, price, creator, text, description}) => {
    return (
        <div className="card">
            <div className="card-image">
                <img src={img} alt={name}/>
            </div>

            {creator ? <div className="card-subtitle">
                <p>{creator}</p>
                {current_bid ? <p>Current Bid</p> : null}
            </div> : null}

            <div className="card-title">
                <h2>{name}</h2>
                <h2>{price}</h2>
            </div>
            {description ? <p className="card-description">{description}</p> : null}
            <button>{text}</button>
        </div>
    );
};

export default Card;
