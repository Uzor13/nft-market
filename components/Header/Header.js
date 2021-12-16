import React from 'react';
import Logo from "./Logo";
import Search from "./Search";
import Nav from "./Nav";

const Header = () => {
    return (
        <header className="header">
            <Logo/>
            <Search/>
            <Nav/>
        </header>
    );
};

export default Header;
