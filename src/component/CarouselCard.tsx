import React from 'react';
import '../styles/testimonial.css';

interface CarouselCardProps {
    imageSrc: string; // Caminho da imagem
    altText: string; // Texto alternativo para a imagem
    testimony: string; // Testemunho ou comentário 
    name: string; // Nome da pessoa
    title: string; // Título ou cargo da pessoa
}

const CarouselCard: React.FC<CarouselCardProps> = ({
    imageSrc,
    altText,
    testimony,
    name,
    title
}) => {
    return (
        <div className="carousel-card">
            <img src={imageSrc} alt={altText} className="carousel-image" />
            <div className="carousel-testimony">
                <p className="testimony-text">"{testimony}"</p>
            </div>
            <div className="carousel-names">
                <p className="name">{name}</p>
                <p className="title">{title}</p>
            </div>
        </div>
    );
};

export default CarouselCard;