package me.seungjae.backend.controller;

import lombok.RequiredArgsConstructor;
import me.seungjae.backend.dto.SkillDto;
import me.seungjae.backend.service.skill.SkillService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/skills")   // Http 요청 매핑
@RequiredArgsConstructor
public class SkillController {

    private final SkillService skillService;

    // 모든 기술 정보 반환
    @GetMapping
    public List<SkillDto> getSkills() {
        return skillService.getAllSkills().stream()
                .map(skill -> new SkillDto(
                        skill.getId()
                        , skill.getName()
                        , skill.getBackgroundColor()
                        , skill.getCategory().getName()
                ))
                .collect(Collectors.toList());
    }
}
