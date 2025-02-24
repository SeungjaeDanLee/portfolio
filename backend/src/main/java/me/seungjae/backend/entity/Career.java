package me.seungjae.backend.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "career")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Career {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title; // 직책

    @Column(nullable = false)
    private String description; // 설명

    @Column(nullable = false)
    private String company; // 회사명

    @Column(nullable = false)
    private String duration; // 근무 기간
}