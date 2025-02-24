package me.seungjae.backend.service.profile;

import lombok.RequiredArgsConstructor;
import me.seungjae.backend.entity.Profile;
import me.seungjae.backend.repository.ProfileRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProfileServiceImpl implements ProfileService {

    private final ProfileRepository profileRepository;

    // 모든 Profile 정보 가져오기
    @Override
    public List<Profile> getProfiles() {
        return profileRepository.findAll();
    }
}
