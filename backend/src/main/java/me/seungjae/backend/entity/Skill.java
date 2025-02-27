package me.seungjae.backend.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "skill")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Skill extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String name; // 기술 이름

    @Column(nullable = true)
    private String backgroundColor; // 사용자가 지정하는 배경색 (예: "#FF5733")

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id")
    private SkillCategory category; // 기술이 속한 카테고리
}
