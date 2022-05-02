import "./about.css"
import React from "react";

function About() {
    return (
        <div className="Home">
            <main>
                <aside className="links">
                    <ul>
                        <li>Die Hochschule</li>
                        <li>Die Semester</li>
                        <li>Die Professoren</li>
                    </ul>            
                </aside>
                <article className="text">
                    <h1> Über uns</h1>
                    <p>Willkommen auf deiner Hochschulseite 
                        <br></br>
                        Hier findest du deine Semester und Professoren im Überblick.
                    </p>
                </article>

            </main>
        </div>

    );

  }

  export default About;