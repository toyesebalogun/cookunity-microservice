package com.example.cookunityuserservice.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import java.util.UUID;

@Data
@Entity
@NoArgsConstructor
public class SecretQuestion extends BaseEntity{
    public SecretQuestion(Long id){
        super(id);
    }

    private String question;
}
