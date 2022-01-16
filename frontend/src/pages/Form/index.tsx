import React from 'react'
import "./styles.css"
import {Link} from "react-router-dom";

function Listing() {

    const movie = {
        id: 1,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
        title: "The Witcher",
        count: 2,
        score: 4.5
    };


    return (
        <div className="netmovies-form-container">
            <img className="netmovies-movie-card-image" src={movie.image} alt={movie.title}/>
            <div className="netmovies-card-bottom-container">
                <h3>{movie.title}</h3>
                <form className="netmovies-form">
                    <div className="form-group netmovies-form-group">
                        <label htmlFor="email">Enter email</label>
                        <input type="email" className="form-control" id="email"/>
                    </div>
                    <div className="form-group netmovies-form-group">
                        <label htmlFor="score">Report your review</label>
                        <select className="form-control" id="score">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="netmovies-form-btn-container">
                        <button type="submit" className="btn btn-outline-warning netmovies-btn">Save</button>
                    </div>
                </form>
                <Link to="/">
                    <button className="btn btn-outline-secondary netmovies-btn mt-3">Cancel</button>
                </Link>
            </div>
        </div>
    )
}

export default Listing