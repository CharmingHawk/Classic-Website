import React from "react";
import { Link } from "react-router-dom";
import '../../Style.scss';

export default function professorenueberblick(){
    return (
        <div className="Home">
            <main>
                <nav className="links">
                    <ul className="seiten">
                        <ul><Link className ="school" to="/hochschule">Die Hochschule</Link></ul>
                        <ul className="semester">
                            <Link className ="school" to="/semester">Die Semester</Link>
                        </ul>
                        <ul><Link className ="school" to="/professoren">Die Professoren</Link></ul>
                    </ul>            
                </nav>
                <article className="text">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to="/home">Home</Link></li>
                            <li class="breadcrumb-item active" aria-current="page">Die Professoren</li>
                        </ol>
                    </nav>
                    <div id="professoren_overview">
                        <div class="row1">
                        <div class="card" style="width:400px">
                            <img class="card-img-top" src="img_avatar1.png" alt="Card image"/>
                            <div class="card-body">
                                <h4 class="card-title">John Doe</h4>
                                <p class="card-text">Some example text.</p>
                                <a href="#" class="btn btn-primary">See Profile</a>
                            </div>
                        </div>
                            <div class="col">Prof2</div>
                            <div class="col">Prof3</div>
                            <div class="col">Prof4</div>
                        </div>
                        <div class="row2">
                            <div class="col">Prof1</div>
                            <div class="col">Prof2</div>
                            <div class="col">Prof3</div>
                            <div class="col">Prof4</div>
                        </div>
                    </div>
                </article>
            </main>
        </div>
    );
}
