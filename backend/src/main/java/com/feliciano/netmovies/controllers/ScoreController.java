package com.feliciano.netmovies.controllers;

import com.feliciano.netmovies.dto.MovieDTO;
import com.feliciano.netmovies.dto.ScoreDTO;
import com.feliciano.netmovies.services.MovieService;
import com.feliciano.netmovies.services.ScoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/scores")
public class ScoreController {

    @Autowired
    private ScoreService scoreService;

    @PutMapping
    public MovieDTO saveScore(@RequestBody ScoreDTO dto){
        MovieDTO movieDTO = scoreService.saveScore(dto);
        return movieDTO;
    }


}
