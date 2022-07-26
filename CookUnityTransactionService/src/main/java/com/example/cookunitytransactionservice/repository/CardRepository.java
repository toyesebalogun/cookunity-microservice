package com.example.cookunitytransactionservice.repository;

import com.example.cookunitytransactionservice.model.Card;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface CardRepository extends JpaRepository<Card, Long> {
    List<Card> findCardsByUserId(Long userId);

    Optional<Card> findCardByCardNumberAndCardType(String cardNumber, String cardType);
}
