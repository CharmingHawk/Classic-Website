import { Link } from "react-router-dom";
import '../../Style.scss';
import React from 'react';

function Home() {
    return (
        <div className="Home">
          <main>
                <aside className="links">
                <ul className="seiten">
                        <li><Link className ="btn btn-outline-danger" to="/hochschule">Die Hochschule</Link></li>
                        <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Die Semester</button>
                        <ul className="dropdown-menu">
                                <li><Link className ="dropdown-item" to="/semester/eins">1. Semester</Link></li>
                                <li><Link className ="dropdown-item" to="/semester/zwei">2. Semester</Link></li>
                        </ul>
                        <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="true">
                            Die Professoren</button>
                        <ul className="dropdown-menu">
                                <li><Link className ="dropdown-item" to="/professoren/iib">IIB</Link></li>
                                <li><Link className ="dropdown-item" to="/professoren/wib">WIB</Link></li>
                                <li><Link className ="dropdown-item" to="/dozenten">Dozenten</Link></li>
                                <li><hr class="dropdown-divider"/></li>
                                <li><Link className ="dropdown-item" to="/professoren">Alle</Link></li>
                        </ul>
                    </ul>            
                </aside>
                <article className="text">
                    <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                    <li class="breadcrumb-item active" aria-current="page">Home</li>
                    </ol>
                    </nav>
                    <h1> Willkommen</h1>
                    <p>Willkommen auf deiner Hochschulseite 
                        <br></br>
                        Hier findest du deine Semester und Professoren im Überblick.
                    </p>
                </article>

            </main>
        </div>

    );

  }

  export default Home;
