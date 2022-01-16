import React, {useEffect, useState} from 'react'
import Pagination from "../Pagination";
import MovieCard from "../../components/MovieCard";
import {BASE_URL} from "../../utils/requests";
import axios from "axios";
import {MoviePage} from "../../types/movie";

function Form() {

    const [PageNumber, setPageNumber] = useState(0);

    useEffect(() => {
        axios.get(`${BASE_URL}/api/movies`)
            .then(res => {
                const data = res.data as MoviePage;
                console.log(data);
                setPageNumber(data.number);
            });
    }, []);


    return (
        <>
            <p>{PageNumber}</p>
            <Pagination/>
            <div className="container">
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