package com.feliciano.netmovies.services;

import com.feliciano.netmovies.dto.MovieDTO;
import com.feliciano.netmovies.dto.ScoreDTO;
import com.feliciano.netmovies.entities.Movie;
import com.feliciano.netmovies.entities.Score;
import com.feliciano.netmovies.entities.User;
import com.feliciano.netmovies.repositories.MovieRepository;
import com.feliciano.netmovies.repositories.ScoreRepository;
import com.feliciano.netmovies.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Arrays;

@Service
public class ScoreService {

    @Autowired
    private MovieRepository movieRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ScoreRepository scoreRepository;

    @Transactional
    public MovieDTO saveScore(ScoreDTO dto) {
        User user = userRepository.findByEmail(dto.getEmail());
        if (user == null) {
            user = new User();
            user.setEmail(dto.getEmail());
            user = userRepository.saveAndFlush(user);
        }
        Movie movie = movieRepository.findById(dto.getMovieId()).get();

        Score score = new Score();
        score.setMovie(movie);
        score.setUser(user);
        score.setValue(dto.getScore());
        score = scoreRepository.saveAndFlush(score);

        double sum = movie.getScores().stream().mapToDouble(Score::getValue).sum();
        double avg = sum / movie.getScores().size();
        movie.setScore(avg);
        movie.setCount(movie.getScores().size());
        movie = movieRepository.saveAndFlush(movie);

        return new MovieDTO(movie);
    }
}
