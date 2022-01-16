package com.feliciano.netmovies.repositories;

import com.feliciano.netmovies.entities.Score;
import com.feliciano.netmovies.entities.ScorePK;
import com.feliciano.netmovies.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {
}
