import React, { useEffect } from "react";
import './juego.css'
import { TotitoContext } from "../../Context";
import { useContext } from "react";

const Juego = () => {

    const { state, MarcaHumano, RevisarGanador } = React.useContext(TotitoContext)
    const [bloqueo, setBloqueo] = React.useState(false)
    const [ganador, setGanador] = React.useState('empate')
    useEffect(() => {

        const { isGanadorX, isGanadorO } = RevisarGanador()
        if ((isGanadorO || isGanadorX) && bloqueo != true || state.tablero.every(item => item != undefined)) {
            setBloqueo(true)
            setGanador(isGanadorX ? '¡¡ JUGADOR X GANA !!' : isGanadorO ? '¡¡ JUGADOR O GANA !!' : '¡¡EMPATE!!!')

        }
      

    }, [state.tablero])


    return (
        <div className="game-container">
            {/* Glows de fondo */}
            <div className="glow-purple" />
            <div className="glow-cyan" />

            {/* Header con marcador de puntos e indicador de turno */}
            <header className="game-header">

                {bloqueo && <div className="winner-banner">
                    <h1 className="winner-title winner-highlight">
                        {ganador}
                    </h1>
                </div>}

                <div className="scoreboard">
                    <div className="player-score">
                        <span className="player-label player-x">Jugador X</span>
                        <span className="score-number">2</span>
                    </div>
                    <span className="score-divider">-</span>
                    <div className="player-score">
                        <span className="player-label player-o">Jugador O</span>
                        <span className="score-number">1</span>
                    </div>
                </div>

                <div className="turn-indicator">
                    Turno de: <span className="turn-highlight">{state.turno}</span>
                </div>





            </header>

            {/* Tablero 3x3 (Visualización estática como maqueta) */}
            <main className="board-grid" >
                <button disabled={state.tablero[0] || bloqueo} className={`cell ${state.tablero[0] != undefined ? state.tablero[0] == 'X' ? 'cell-x' : 'cell-o' : ''}`} onClick={() => MarcaHumano(0)}>{state.tablero[0] != undefined && state.tablero[0]}</button>
                <button disabled={state.tablero[1] || bloqueo} className={`cell ${state.tablero[1] != undefined ? state.tablero[1] == 'X' ? 'cell-x' : 'cell-o' : ''}`} onClick={() => MarcaHumano(1)}>{state.tablero[1] != undefined && state.tablero[1]}</button>
                <button disabled={state.tablero[2] || bloqueo} className={`cell ${state.tablero[2] != undefined ? state.tablero[2] == 'X' ? 'cell-x' : 'cell-o' : ''}`} onClick={() => MarcaHumano(2)}>{state.tablero[2] != undefined && state.tablero[2]}</button>

                <button disabled={state.tablero[3] || bloqueo} className={`cell ${state.tablero[3] != undefined ? state.tablero[3] == 'X' ? 'cell-x' : 'cell-o' : ''}`} onClick={() => MarcaHumano(3)}>{state.tablero[3] != undefined && state.tablero[3]}</button>
                <button disabled={state.tablero[4] || bloqueo} className={`cell ${state.tablero[4] != undefined ? state.tablero[4] == 'X' ? 'cell-x' : 'cell-o' : ''}`} onClick={() => MarcaHumano(4)}>{state.tablero[4] != undefined && state.tablero[4]}</button>
                <button disabled={state.tablero[5] || bloqueo} className={`cell ${state.tablero[5] != undefined ? state.tablero[5] == 'X' ? 'cell-x' : 'cell-o' : ''}`} onClick={() => MarcaHumano(5)}>{state.tablero[5] != undefined && state.tablero[5]}</button>

                <button disabled={state.tablero[6] || bloqueo} className={`cell ${state.tablero[6] != undefined ? state.tablero[6] == 'X' ? 'cell-x' : 'cell-o' : ''}`} onClick={() => MarcaHumano(6)}>{state.tablero[6] != undefined && state.tablero[6]}</button>
                <button disabled={state.tablero[7] || bloqueo} className={`cell ${state.tablero[7] != undefined ? state.tablero[7] == 'X' ? 'cell-x' : 'cell-o' : ''}`} onClick={() => MarcaHumano(7)}>{state.tablero[7] != undefined && state.tablero[7]}</button>
                <button disabled={state.tablero[8] || bloqueo} className={`cell ${state.tablero[8] != undefined ? state.tablero[8] == 'X' ? 'cell-x' : 'cell-o' : ''}`} onClick={() => MarcaHumano(8)}> {state.tablero[8] != undefined && state.tablero[8]}</button>
            </main>


            {/* Botones de acción */}
            <footer className="game-controls">
                <button className="btn-secondary">Volver al Menú</button>
                <button className="btn-reset">Reiniciar Partida</button>
            </footer>
        </div >
    )
}

export { Juego };