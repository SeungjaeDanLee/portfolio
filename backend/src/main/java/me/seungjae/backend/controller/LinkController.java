package me.seungjae.backend.controller;

import lombok.RequiredArgsConstructor;
import me.seungjae.backend.entity.Link;
import me.seungjae.backend.service.link.LinkService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/links")
@RequiredArgsConstructor
public class LinkController {
    private final LinkService linkService;

    @GetMapping
    public List<Link> getLinks() {
        return linkService.getLinks();
    }
}
