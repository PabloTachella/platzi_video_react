import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { getVideoSource } from '../actions'
import '../assets/styles/components/Player.scss'

const Player = props => {
    // props.match.params es lo que recibe react router en la ruta asignada a player
    const { id } = props.match.params
    const [loading, setLoading] = useState(true)
    // Object.keys().length me permite saber cuantos elementos tiene un objeto
    const hasPlaying = Object.keys(props.playing).length > 0
    useEffect(() => {
        props.getVideoSource(id)
        setLoading(false)
    }, [])
    if (loading) {
        return <h2>Cargando...</h2>;
      }
    return hasPlaying ? (
        <div className="player">
            <video controls autoPlay>
                <source src={props.playing.source} type="video/mp4" />
            </video>
            <div className="player-back">
                <button type="button" onClick={() => props.history.goBack()}>
                    Regresar
                </button>
            </div>
        </div>
    ) : <Redirect to="/404/" />
}

const mapStateToProps = state => {
    return {
        playing: state.playing,
    }
}

const mapDispatchToProps = {
    getVideoSource,
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)