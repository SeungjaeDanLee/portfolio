package me.seungjae.backend.service.link;

import lombok.RequiredArgsConstructor;
import me.seungjae.backend.entity.Link;
import me.seungjae.backend.repository.LinkRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class LinkServiceImpl implements LinkService {

    private final LinkRepository linkRepository;

    @Override
    public List<Link> getLinks() {
        return linkRepository.findAll();
    }
}
