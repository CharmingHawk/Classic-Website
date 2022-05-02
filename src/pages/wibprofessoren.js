import React from "react";
import { Link } from "react-router-dom";
import '../App.css';
import './professoren.css'
import "../Home/home.css"


export default function wibprofessoren(){
    return (
        <div className="Home">
            <main>
                <aside className="links">
                    <ul className="seiten">
                        <li><Link className ="btn btn-outline-danger" to="/hochschule">Die Hochschule</Link></li>
                        <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Die Semester</button>
                        <ul className="dropdown-menu">
                                <li><Link className ="dropdown-item" to="/semestereins">1. Semester</Link></li>
                                <li><Link className ="dropdown-item" to="/semesterzwei">2. Semester</Link></li>
                                <li><hr class="dropdown-divider"/></li>
                                <li><Link className ="dropdown-item" to="/semester">Die Semester</Link></li>
                        </ul>
                        <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="true">
                            Die Professoren</button>
                        <ul className="dropdown-menu">
                                <li><Link className ="dropdown-item" to="/iibprofessoren">IIB</Link></li>
                                <li><Link className ="dropdown-item" to="/wibprofessoren">WIB</Link></li>
                                <li><Link className ="dropdown-item" to="/dozenten">Dozenten</Link></li>
                                <li><hr class="dropdown-divider"/></li>
                                <li><Link className ="dropdown-item" to="/professoren">Alle</Link></li>
                        </ul>
                    </ul>            
                </aside>
                
            <body className="text">

                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link to="/home">Home</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">Die Professoren</li>
                    </ol>
                </nav>
                <h1> DIE PROFESSOREN IM WIB</h1>

                
                
                </body>

        </main>
</div>
    );
}
