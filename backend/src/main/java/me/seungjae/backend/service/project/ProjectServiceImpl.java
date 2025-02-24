package me.seungjae.backend.service.project;

import lombok.RequiredArgsConstructor;
import me.seungjae.backend.entity.Project;
import me.seungjae.backend.repository.ProjectRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProjectServiceImpl implements ProjectService {

    private final ProjectRepository projectRepository;

    @Override
    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }
}
