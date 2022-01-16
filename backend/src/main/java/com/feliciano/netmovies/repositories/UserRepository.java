package com.feliciano.netmovies.repositories;

import com.feliciano.netmovies.entities.Movie;
import com.feliciano.netmovies.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByEmail(String email);
}
