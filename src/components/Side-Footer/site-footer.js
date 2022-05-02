import "../../Style.scss";
import React from 'react'

function SideFooter(){
    return(
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="colum1">
                        <h6>Weitere Informationen</h6>
                        <ul className="footer-links">
                            <li><a href="https://www.h-ka.de/impressum">  Impressum</a></li>
                            <li><a href="https://www.h-ka.de/datenschutz">  Datenschutz</a></li>
                        </ul>
                    </div>
                </div>
                <hr></hr>
                <div className="container">
                    <div className="row">
                        <div className="colum2">
                            <p className="copyright-text">Copyright &copy; 2021 All Rights 
                            Reserved by  <a href="https://www.h-ka.de">Hochschule Karlsruhe</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default SideFooter;