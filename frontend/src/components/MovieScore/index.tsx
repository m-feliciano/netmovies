import React from 'react'
import MovieStars from "../MovieStars";
import "./styles.css"

type Props = {
    score: number,
    count: number
}

function MovieScore({score, count}: Props) {
    return (
        <div className="netmovies-score-container">
            <p className="netmovies-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
            <MovieStars score={score}/>
            <p className="netmovies-score-count">{count} reviews</p>
        </div>
    )
}

export default MovieScore;