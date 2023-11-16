import React from "react"
import Navbar from "../component/navbar.js";
import Hero from "../component/hero.js";
import './UI.css';

const Home = () => (
  <div>
    <Navbar />
    <Hero />

      <div class="section">
        <div class="column">
          <h1 id class="h1">
            Recent Products
          </h1>
            <div id="ia21sa" class="text-main-content">
            All of our game is accessible in itch.io, but you can also play on-site (if available)
            <br/> We are planning to publish our game to the steam platform soon! 
            </div>
            <div id="ixzh1" class="gjs-grid-row">

              <div id="ilpi3" class="gjs-grid-column feature-item">
                <div id="iuckhi" class="gjs-grid-row">
                </div>
                <h3 id="in9ef" class="gjs-heading">Red Signal: Zero</h3>
                <span id="i35ia">A mysterious broadcast has brought your attention in the city. A story driven game!</span>
              </div>

              <div id="i0vwa" class="gjs-grid-column feature-item">
                <div id="ibu9x" class="gjs-grid-row">
                </div>
                <h3 id="iztnh" class="gjs-heading">Star Sector ITOHA Mod</h3>
                <div id="i5vuv" class="text-main-content">A game mod I created using<br/>
                  IntelliJ Environment and base framework of star sector.
                </div>
              </div>

              <div id="ied2k" class="gjs-grid-column feature-item">
                <div id="iifzk" class="gjs-grid-row">
                </div>
                <h3 id="iz8s6" class="gjs-heading">Gun N' Gal</h3>
                <div id="i8q9u" class="text-main-content">Bullet hell game with a dating mechanic so you can have a relationship as a Touhou player.</div>
              </div>
          </div>
        </div>
        </div>
      
          <div id="iz29ek" class="gjs-grid-row">
            <div id="ik2rdi" class="gjs-grid-column">
            <h2 id="i83vu9" class="gjs-heading">Can't find what you need?</h2>
            <div id="in201n" class="text-main-content">Check out our catalog or kuritzu's repository
              <br/>for the complete list of our products.<br/>
          </div>
          <div class="gjs-grid-row" id="iajht">
            <div class="gjs-grid-column" id="ip1ab">
            <button type="button" id="i1dj1">Github</button>
          </div>
          <div class="gjs-grid-column" id="iz3fl">
            <button type="button" id="icoxh">Catalog</button>
            </div>
          </div>
        </div>
      </div>
    <div id="iv3be5" class="gjs-grid-row">
      <div id="ilriti" class="gjs-grid-column">
        <div class="gjs-text-blue" id="id7ol">
          Email: kentaro.keren@gmail.com<br/>Phone Number: +6282232768744<br/>
        </div>
        <a id="ipjdtn" href="https://grapesjs.com/" class="gjs-link">Made with
          GrapesJS, open source website builder.<br/>
        </a>
        <div id="it6g1v" class="gjs-text-blue">
          Copyright © 2023 Kuritzu Studio. Happy Aya Day!</div>
      </div>
    </div>
  </div>
);
  
export default Home;