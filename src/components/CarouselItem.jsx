import React from 'react'
import '../assets/styles/components/CarouselItem.scss'

const CarouselItem = () => (
    <div className="carousel-item">
        <img className="carousel-item__img" src="https://source.unsplash.com/random?movie" alt=""/>
        <div className="carousel-item__details">
            <div>
                <img src="images/icon-play.png" alt="play" />
                <img src="images/icon-plus.png" alt="plus" />
            </div>
            <p className="carousel-item__details--title">Título descriptivo</p>
            <p className="carousel-item__details--subtitle">2021 16+ 120 minutos</p>
        </div>
    </div>
)

export default CarouselItem