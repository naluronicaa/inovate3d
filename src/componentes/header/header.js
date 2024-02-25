import React from "react";
import './header.css'
import HeaderTop from "./headertop";
import Headerbtt from "./headerbtt";

function Header () {
    return(
        <header className="header">
            <HeaderTop/>
            <Headerbtt/>
        </header>
    );
}

export default Header