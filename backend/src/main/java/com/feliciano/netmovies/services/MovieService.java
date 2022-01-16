package com.feliciano.netmovies.services;

import com.feliciano.netmovies.dto.MovieDTO;
import com.feliciano.netmovies.entities.Movie;
import com.feliciano.netmovies.repositories.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class MovieService {

    @Autowired
    private MovieRepository movieRepository;

    @Transactional(readOnly = true)
    public Page<MovieDTO> findAll(Pageable pageable) {
        Page<Movie> movies =  movieRepository.findAll(pageable);
        Page<MovieDTO> dto = movies.map(MovieDTO::new);
        return dto;
    }

    @Transactional(readOnly = true)
    public MovieDTO findById(Long id) {
        Movie movie = movieRepository.findById(id).get();
        return new MovieDTO(movie);
    }
}
