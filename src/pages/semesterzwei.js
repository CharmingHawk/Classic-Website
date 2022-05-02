import React from "react";
import { Link } from "react-router-dom";
import '../App.css';
import "../Home/home.css"


export default function semesterzwei(){
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
        <article className="text">
        <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to="/home">Home</Link></li>
                            <li class="breadcrumb-item"><Link to="/semester">Die Semester</Link></li>
                            <li class="breadcrumb-item active" aria-current="page">2. Semester</li>
                        </ol>
                    </nav>
            <h1> 2. SEMESTER</h1>

            <p>Wir sind Anna und Veronika, Studenten der HS Karlsruhe im XX. Semester und haben diese Homepage zu unserem SWEntwk. Projekt erstellt, um bestens vorbereitet auf die Klausur zu sein!
                <br/>Gelehrt haben uns die Frau Schön, aber auch viele andere nützliche Internetseiten wie Youtube, w3School und sogar Bücher.
                <br/>Wir hoffen, dass ihr an unserer Seite gefallen habt!
            </p>

                <p>Eure Anna und Nika :)</p>
        </article>

    </main>
</div>
    );
}
