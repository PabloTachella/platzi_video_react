import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { setFavourite, deleteFavourite } from '../actions'
import '../assets/styles/components/CarouselItem.scss'
import playIcon from '../assets/static/icon-play.png'
import plusIcon from '../assets/static/icon-plus.png'
import removeIcon from '../assets/static/icon-remove.png'

const CarouselItem = (props) => {
    const { id, cover, title, year, contentRating, duration, isList } = props
    const handleSetFavourite = () => {
        props.setFavourite({
            id, cover, title, year, contentRating, duration
        })
    }
    const handleDeleteFavourite = (itemId) => {
        props.deleteFavourite(itemId)
    }
    return(
        <div className="carousel-item">
            <img className="carousel-item__img" src={cover} alt={title} />
            <div className="carousel-item__details">
                <div>
                    <Link to={`/player/${id}`}>
                        <img
                            src={playIcon}
                            alt="play"
                        />
                    </Link>
                    
                    { isList ? 
                        <img
                            src={removeIcon}
                            alt="remove"
                            onClick={() => handleDeleteFavourite(id)}
                        /> :
                        <img
                            src={plusIcon}
                            alt="plus"
                            onClick={handleSetFavourite}
                        />
                    }
                </div>
                <p className="carousel-item__details--title">{title}</p>
                <p className="carousel-item__details--subtitle">
                {`${year} ${contentRating} ${duration} Minutos`}    
                </p>
            </div>
        </div>
    )
}

CarouselItem.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.number,
    contentRating: PropTypes.string,
    duration: PropTypes.number,
}

const mapDispatchToProps = {
    setFavourite,
    deleteFavourite,
}

export default connect(null, mapDispatchToProps)(CarouselItem)