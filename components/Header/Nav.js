import React from 'react';

const Nav = () => {
    return (
        <ul className="navbar-list">
            <li><a href="">Collections</a></li>
            <li><a href="">Feature</a></li>
            <li><a href="">FAQs</a></li>
            <button className="navbar-list__button">Select Wallet</button>
        </ul>
    );
};

export default Nav;
