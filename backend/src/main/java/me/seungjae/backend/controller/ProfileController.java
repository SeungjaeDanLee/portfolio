package me.seungjae.backend.controller;

import lombok.RequiredArgsConstructor;
import me.seungjae.backend.entity.Career;
import me.seungjae.backend.service.career.CareerService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/profile")
@RequiredArgsConstructor
public class ProfileController {
    private final CareerService careerService;

    @GetMapping
    public List<Career> getCareers() {
        return careerService.getAllCareers();
    }
}
