package me.seungjae.backend.dto;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
public class SkillDto {
    private Long id;
    private String name;
    private String backgroundColor;
    private String categoryName; // 카테고리 이름 추가
}
