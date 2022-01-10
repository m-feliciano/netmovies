import MovieStars from "../MovieStars";
import "./styles.css"

function MovieScore() {
    const count = 3.5;
    const score = 13;
    return (
        <div className="netmovies-score-container">
            <p className="netmovies-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
            <MovieStars/>
            <p className="netmovies-score-count">{count} reviews</p>
        </div>
    )
}

export default MovieScore;