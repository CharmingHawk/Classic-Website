import React from "react";
import {Link} from "react-router-dom";
import "./navbar.css";

/*Navigationsbereich - CheckBox + Navileiste rechts */
function Navbar(){
    return(
        <nav className="navbar-body">
                <div className="navbar-rechts">
                    <ul className="navbar-rechts-list">
                        <li class="btn btn-outline-danger"><Link to="/home">Home</Link></li>
                        <li class="btn btn-outline-danger"><Link to="/us">About us</Link></li>
                        <li class="btn btn-outline-danger"><a href="https://www.h-ka.de">Hochschulseite</a></li>
                    </ul>
                </div>
            </nav>
    
    );


}

export default Navbar;