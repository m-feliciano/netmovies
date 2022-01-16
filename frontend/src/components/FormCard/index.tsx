import React, {useEffect, useState} from 'react'
import "./styles.css"
import {Link} from "react-router-dom";
import axios from "axios";
import {BASE_URL} from "../../utils/requests";
import {Movie} from "../../types/movie";

type Props = {
    movieId: String;
}

function FormCard({movieId}: Props) {

    const [movie, setMovie] = useState<Movie>();

    useEffect(() =>{
        axios.get(`${BASE_URL}/api/movies/${movieId}`).then(res =>{
            setMovie(res.data);
        });
    },[movieId]);

    return (
        <div className="netmovies-form-container">
            <img className="netmovies-movie-card-image" src={movie?.image} alt={movie?.title}/>
            <div className="netmovies-card-bottom-container">
                <h3>{movie?.title}</h3>
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

export default FormCard