import React from 'react'
import '../assets/styles/components/CarouselItem.scss'

import iconPlay from '../assets/static/icon-play.png'
import iconPlus from '../assets/static/icon-plus.png'

const CarouselItem = () => (
    <div className="carousel-item">
        <img className="carousel-item__img" src="https://source.unsplash.com/random?movie" alt=""/>
        <div className="carousel-item__details">
            <div>
                <img src={iconPlay} alt="play" />
                <img src={iconPlus} alt="plus" />
            </div>
            <p className="carousel-item__details--title">Título descriptivo</p>
            <p className="carousel-item__details--subtitle">2021 16+ 120 minutos</p>
        </div>
    </div>
)

export default CarouselItem