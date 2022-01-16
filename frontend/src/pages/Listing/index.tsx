import React, {useEffect, useState} from 'react'
import Pagination from "../Pagination";
import MovieCard from "../../components/MovieCard";
import {BASE_URL} from "../../utils/requests";
import axios from "axios";
import {MoviePage} from "../../types/movie";

function Form() {

    const [PageNumber, setPageNumber] = useState(0);

    const [page, setPage] = useState<MoviePage>({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 12,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true
    });

    useEffect(() => {
        axios.get(`${BASE_URL}/api/movies?size=12&page=${PageNumber}&sort=id`)
            .then(res => {
                const data = res.data as MoviePage;
                setPage(data);
            });
    }, [PageNumber]);

    return <>
        <Pagination/>
        <div className="container">
            <div className="row">
                {page.content.map((movie) => (
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard movie={movie}/>
                    </div>
                ))};
            </div>
        </div>
    </>
}

export default Form