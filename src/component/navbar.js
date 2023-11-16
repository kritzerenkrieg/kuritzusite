import React from "react";
import './navbar.css';

function Navbar() {
    return (  
        <>
        <div class="nav-row">
            <div class="nav-column">
                <img class="navlogo" src="https://i.ibb.co/jw60y4b/Group-11-2.png" alt="cool logo"/>
            </div>
            <div class="nav-column">
                <a id="products" href="products"  class="navbutton">Products</a>
                <a id="donate" href="donate" class="navbutton">Donate</a>
                <a id="about" href="about" class="navbutton">About</a>
            </div>
            <div id="visitbutton" class="nav-column">
                <a href="kuritzukurisu.itch.io" target="kuritzukurisu.itch.io" class="navbutton visit"> Visit itch.io</a>
            </div>
        </div>
        </>
        );
};
export default Navbar;