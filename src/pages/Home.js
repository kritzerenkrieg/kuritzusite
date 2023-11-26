import React from "react"
import Navbar from "../component/navbar.js";
import Hero from "../component/hero.js";
import Catalog from "../component/catalog.js";
import Footer from "../component/footer.js";
import './UI.css';
import './Animation.js';
const Home = () => (
  <div>
    <Navbar />
    <Hero />
    {/* this  is catalog section*/}
    <div class="section">
      <div class="column">
        <h1 class="h1 mb-5">
          Recent Products
        </h1>
        <div class="section catalog">
          <Catalog 
          imgSrc="images/redrika.png"
          title="Red Signal: Zero"
          desc="A mysterious broadcast has brought your attention in the city. A story driven game!"
          />
          <Catalog 
          imgSrc="images/itoha.png"
          title="Star Sector ITOHA"
          desc="A game mod I created using IntelliJ Environment and base framework of star sector."
          />
          <Catalog 
          imgSrc="images/gunngal.png"
          title="Gun N' Gal"
          desc="Bullet hell game with a dating mechanic. Best visual novel for Touhou player."
          />  
        </div>
      </div>
    </div>
      
    <div class="section fade-in-up-on-scroll">
          <div class="column blog">
            <h1 class="h1">Can't find what you need?</h1>
            <div class="text-content">
              Check out our catalog or kuritzu's repository
              for the complete list of our products.
            </div>
            <div class="section catalog" style={{ paddingBottom: '0px', gap: '5vw', justifyContent: 'center' }}>
              <div class="column" style={{ backgroundColor: 'white'}}>
              <button type="button" id="bt-github">Github</button>
              </div>
              <div class="column" style={{ backgroundColor: 'white'}}>
              <button type="button" id="bt-catalog">Catalog</button>
              </div>
            </div>
      </div>
    </div>

    <Footer 
    email="kentaro.keren@gmail.com"
    phone="+6282232768744"
    motd="Lysithea beloved"/>
  </div>
);
  
export default Home;