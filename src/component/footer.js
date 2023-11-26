import React from "react";
import '../pages/UI.css';
import './footer.css';

function Footer(props) {
    const {email, phone, motd} = props;
    return (
        <div class="section footer" style={{ paddingBottom: '0px'}}>
        <div class="column">
          <div class="footer-text" style={{ padding: '0px'}}>
            Email: {email}<br/>Phone Number: {phone}
          </div>
          <a href="https://grapesjs.com/" class="footer-text" style={{padding: '0px', color: 'blue'}}>Made with
            GrapesJS, open source website builder.<br/>
          </a>
          <div id="it6g1v" class="footer-text" style={{padding: '0px', paddingBottom: '15px'}}>
            Copyright © 2023 Kuritzu Studio. {motd}</div>
        </div>
      </div>
        );
};
export default Footer;