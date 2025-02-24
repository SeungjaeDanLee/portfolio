package me.seungjae.backend.controller;

import lombok.RequiredArgsConstructor;
import me.seungjae.backend.entity.Skill;
import me.seungjae.backend.service.skill.SkillService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/skill")   // Http 요청 매핑
@RequiredArgsConstructor
public class SkillController {

    private final SkillService skillService;

    // 모든 기술 정보 반환
    @GetMapping
    public List<Skill> getSkills() {
        return skillService.getAllSkills();
    }
}
