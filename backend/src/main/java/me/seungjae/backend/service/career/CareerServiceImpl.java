package me.seungjae.backend.service.career;

import lombok.RequiredArgsConstructor;
import me.seungjae.backend.entity.Career;
import me.seungjae.backend.repository.CareerRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CareerServiceImpl implements CareerService {

    private final CareerRepository careerRepository;

    @Override
    public List<Career> getAllCareers() {
        return careerRepository.findAll();
    }
}
