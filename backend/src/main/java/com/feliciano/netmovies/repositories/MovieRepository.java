package com.feliciano.netmovies.repositories;

import com.feliciano.netmovies.entities.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MovieRepository extends JpaRepository<Movie, Long> {
}
