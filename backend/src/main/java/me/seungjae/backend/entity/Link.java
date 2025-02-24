package me.seungjae.backend.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "link")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Link {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String siteName; // site name

    private String siteUrl; // site url
}
