package me.seungjae.backend.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "profile")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Profile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 100)
    private String name; // 이름

    @Column(nullable = false, length = 10)
    private String birthDate; // 생년월일 (형식: yyyy.MM.dd)

    @Column(nullable = false, length = 255)
    private String address; // 주소

    @Column(nullable = false, length = 20)
    private String phoneNumber; // 연락처

    @Column(nullable = false, length = 100)
    private String email; // 이메일

    @Column(nullable = false, length = 100)
    private String education; // 학력

    @Column(columnDefinition = "TEXT")
    private String bio; // 자기소개

    @Column(nullable = true, length = 255)
    private String imageUrl; // 이미지 파일 경로 (파일 시스템 혹은 클라우드 경로)
}
