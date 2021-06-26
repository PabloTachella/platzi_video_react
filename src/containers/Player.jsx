import React from 'react'
import '../assets/styles/components/Player.scss'

const Player = props => {
    // props.match.params es lo que recibe react router en la ruta asignada a player
    const { id } = props.match.params
    return (
        <div className="player">
            <video controls autoPlay>
                <source src="" type="video/mp4" />
            </video>
            <div className="player-back">
                <button type="button" onClick={() => props.history.goBack()}>
                    Regresar
                </button>
            </div>
        </div>
    )
}

export default Player