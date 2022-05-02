import "./bildheader.css"
import schule from "./schule.png"
import React from "react";


function BildHeader(){
    return(
        <header>
            <div>
                <img src={schule} id="headerImg" alt="Hochschule Karlsruhe" />
            </div>
        </header>
    );

}
export default BildHeader;