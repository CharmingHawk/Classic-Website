import React from "react";
import { Link } from "react-router-dom";
import '../App.css';
import "../Home/home.css"
import "./hochschule.css"

export default function hochschule() {
    return (
        <div className="Home">
            <main>
                <aside className="links">
                <ul className="seiten">
                        <li><Link className ="btn btn-outline-danger" to="/hochschule">Die Hochschule</Link></li>
                        <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="true">
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
                            <li class="breadcrumb-item active" aria-current="page">Die Hochschule</li>
                        </ol>
                    </nav>
                    <h1> DIE HOCHSCHULE</h1>
                    <img src="https://www.h-ka.de/fileadmin/_processed_/b/4/csm_HKA_ZH_Imagefoto_1903_7c269b4be8.jpg" 
                        class="card-img-top" 
                        alt="Mensa und Cafeteria"
                        />
                        <h5 class="card-title">Mensa und Cafeteria</h5>
                            <p class="card-text">
                            Die Mensa Moltke mit ihrer auff??lligen Architektur ist nicht zu ??bersehen. Sie liegt in der Moltkestra??e unmittelbar neben der Hochschule Karlsruhe und verk??stigt die Studierenden der HKA, der Kunstakademie und der P??dagogischen Hochschule. Sie wird vom Studierendenwerk Karlsruhe betrieben. Neben t??glich wechselnden Men??s, einem Pasta-Buffet, Grill- und Wokgerichten, Salaten und Desserts k??nnen Sie sich in der Cafeteria auch einfach f??r ein schnelles Br??tchen und einen Espresso entscheiden. Eine weitere Cafeteria im Untergeschoss des Geb??udes A bietet ebenfalls Snacks und Getr??nke sowie ein Tellergericht an. Weitere Infos zur Mensa Moltke finden Sie auf den Seiten des Studierendenwerks
                            <br/>
                            <br/>
                            <a id="studierendenwerk" href="#" class="btn btn-outline-danger"
                            >Studierendenwerk</a>
                            </p>
                            

                </body>

            </main>
        </div>
    );
}
