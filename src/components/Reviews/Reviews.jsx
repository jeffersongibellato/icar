import React from 'react';
import ReviewCard from './ReviewCard';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "João Silva",
      rating: 5,
      date: "15 de Dez, 2023",
      comment: "Excelente serviço! Meu carro ficou como novo. A atenção aos detalhes foi impressionante.",
    },
    {
      id: 2,
      name: "Maria Santos",
      rating: 4,
      date: "14 de Dez, 2023",
      comment: "Ótima experiência. Equipe muito profissional e serviço rápido.",
    },
    {
      id: 3,
      name: "Pedro Oliveira",
      rating: 5,
      date: "13 de Dez, 2023",
      comment: "Melhor lava-rápido da cidade! Sou cliente regular e eles nunca decepcionam.",
    }
  ];

  return (
    <div className="space-y-4">
      {reviews.map(review => (
        <ReviewCard key={review.id} {...review} />
      ))}
    </div>
  );
};

export default Reviews;