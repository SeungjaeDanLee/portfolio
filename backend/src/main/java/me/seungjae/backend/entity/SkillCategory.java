package me.seungjae.backend.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "skill_category")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SkillCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String name; // 카테고리 이름 (예: "프로그래밍 언어", "프론트엔드", "백엔드")
}
