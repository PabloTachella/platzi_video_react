import React from 'react'
import '../assets/styles/components/CarouselItem.scss'

import iconPlay from '../assets/static/icon-play.png'
import iconPlus from '../assets/static/icon-plus.png'

const CarouselItem = ({ cover, title, year, contentRating, duration }) => (
    <div className="carousel-item">
        <img className="carousel-item__img" src={cover} alt={title} />
        <div className="carousel-item__details">
            <div>
                <img src={iconPlay} alt="play" />
                <img src={iconPlus} alt="plus" />
            </div>
            <p className="carousel-item__details--title">{title}</p>
            <p className="carousel-item__details--subtitle">
            {`${year} ${contentRating} ${duration} Minutos`}    
            </p>
        </div>
    </div>
)

export default CarouselItem