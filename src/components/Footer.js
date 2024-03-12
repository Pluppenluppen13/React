import React from "react";

import {NavLink, Link} from "react-router-dom";

//Icons and images
import fb from '../icons/facebook.svg';
import ig from '../icons/instagram.png';

class Footer extends React.Component{
    render () {
        return (
            <footer>
{/* ROW 5 */}
                <div class="row5">
                    <div class="top-section">
                        <NavLink to="/omoss" id="omOss" onmouseover="omOssOver()" onmouseout="omOssOut()" class="bottom-links">Om oss</NavLink>
                        <a href="#" id="kontaktaOss" onmouseover="KontaktaOssOver()" onmouseout="KontaktaOssOut()" class="bottom-links">Kontakta oss</a>
                        <a href="#" id="FAQ" onmouseover="FAQOver()" onmouseout="FAQOut()" class="bottom-links">PiercingkungenFAQ</a>
                        <NavLink to="/kopvillkor" id="kopvillkor" onmouseover="kopvillkorOver()" onmouseout="kopvillkorOut()" class="bottom-links">Köpvillkor</NavLink>
                        <a href="#" id="tips" onmouseover="tipsOver()" onmouseout="tipsOut()" class="bottom-links">Tips & Råd</a>
                    </div>
                    <div class="middle-section">
                        <a href="https://www.facebook.com/piercingkungen" class="bottom-links">
                            <img id="fbImg" onmouseover="fbOver()" onmouseout="fbOut()" class="facebook-icon" src={fb} alt="facebook-icon" />
                        </a>
                        <a href="https://www.instagram.com/piercingkungen/" class="bottom-links">
                            <img id="igImg" onmouseover="igOver()" onmouseout="igOut()" class="instagram-icon" src={ig} alt="instagram-icon" />
                        </a>
                    </div>
                    <div class="bottom-section">
                        © Copyright 2024 Piercingkungen.se
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;