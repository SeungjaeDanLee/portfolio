package me.seungjae.backend.service.skill;

import lombok.RequiredArgsConstructor;
import me.seungjae.backend.entity.Skill;
import me.seungjae.backend.repository.SkillRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SkillServiceImpl implements SkillService {

    private final SkillRepository skillRepository;

    @Override
    public List<Skill> getAllSkills() {
        return skillRepository.findAll();
    }
}
