package me.seungjae.backend.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "skill")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Skill {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String name; // 기술 이름

    @Column(nullable = true)
    private String backgroundColor; // 해당 카테고리의 배경색 (예: "#FF5733")
}
