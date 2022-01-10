import Pagination from "../Pagination";
import MovieCard from "../../components/MovieCard";

function Form() {
    return (
        <>
            <Pagination/>
            <div className="Container">
                <div className="row">
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard/>
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard/>
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard/>
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form