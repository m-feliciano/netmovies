import {ReactComponent as GithubIcon} from "../../assets/img/github.svg";
import React from "react";
import "./styles.css"

function Navbar() {
    return (
        <header>
            <nav className="container">
                <div className="netmovies-nav-content">
                    <h1>NetMovies</h1>
                    <a href="https://github.com/m-feliciano" target="_blank"  rel="noopener noreferrer">
                        <div className="netmovies-contact-container">
                            <GithubIcon/>
                            <p className="netmovies-contact-link">/m-feliciano</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default Navbar