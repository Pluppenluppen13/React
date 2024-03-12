import React from "react";

import {NavLink, Link} from "react-router-dom";

//Icons and images
import search from '../icons/search.svg';

class Header extends React.Component{
    render () {
        return (
            <header>
                <div class="header">
{/* ROW 1 */}
                    <div class="row1">
                        <div class="email">
                            &#9993;
                            E-postadress: info@piercingkungen.se
                        </div>
                        <div class="guarantees">
                            &#10003;
                            Snabba leveranser!   
                            &#10003;
                            Fri frakt över 200kr!  
                            &#10003;
                            Säkra betalsätt!
                        </div>
                    </div>
{/* ROW 2 */}
                    <div class="row2">
                        <div class="logo">
                            <img src={require('../images/logo.avif')} />
                        </div>

                        <div class="moms">
                            inkl. moms
                            <div class="down-arrow"> &#8227; </div>
                            <NavLink to="/gillat" class="heart"> &#9829; </NavLink>
                            <NavLink to="/gillat" class="heart"> &#9829; </NavLink>
                            <NavLink to="/gillat" class="heart"> &#9829; </NavLink>
                            0
                        </div>
                    </div>
{/* ROW 3 */}
                    <div class="row3">
                        <div class="left-section">
                            <NavLink to="/" class="menulinks">Hem</NavLink>
                            <NavLink to="/nyheter" class="menulinks">Nyheter</NavLink>
                            <NavLink to="/produkter" class="menulinks">Produkter</NavLink>
                        </div>
                        <div class="right-section">
                            <input class="search-bar" type="text" placeholder="Sök" onfocus="this.placeholder=''" onblur="this.placeholder='Sök'" required />
                            <img class="search-icon" src={search} alt="sök" />
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;