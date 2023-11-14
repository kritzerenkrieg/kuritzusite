import React from "react";
import './navbar.css';

function Navbar() {
    return (  
        <>
        <div class="gjs-grid-row">
            <div class="gjs-grid-column">
                <img class="navlogo" src="https://i.ibb.co/jw60y4b/Group-11-2.png" alt="cool logo"/>
            </div>
            <div class="gjs-grid-column">
                <a id="products" href="#feature-section"  class="navbutton">Products</a>
                <a id="donate" href="#testimonial-section" class="navbutton">Donate</a>
                <a id="about" href="#feature-section" class="navbutton">About</a>
            </div>
            <div id="id7x" class="gjs-grid-column">
                <a href="kuritzukurisu.itch.io" target="kuritzukurisu.itch.io" class="navbutton visit"> Visit itch.io</a>
            </div>
        </div>
        </>
        );
};
export default Navbar;