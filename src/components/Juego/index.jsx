import React, { useEffect } from "react";
import './juego.css'
import { TotitoContext } from "../../Context";
import { useContext } from "react";

const Juego = () => {

    const { state, MarcaHumano, RevisarGanador, TirarAI, } = React.useContext(TotitoContext)
    const [bloqueo, setBloqueo] = React.useState(false)
    const [ganador, setGanador] = React.useState('')
    const [pensandoAI, setPensandoAI] = React.useState(false)
    const [bloqueoAnalizar, setBloqueoAnalizar] = React.useState(false)


    const recibirTiro = async () => {

        let posicion = await TirarAI(state.tablero, state.turno)
        console.log(posicion)

        MarcaHumano(posicion)
        setBloqueo(false)
        setPensandoAI(false)

    }

    useEffect(() => {

        const { isGanadorX, isGanadorO } = RevisarGanador()
        if ((isGanadorO || isGanadorX) && bloqueoAnalizar != true || state.tablero.every(item => item != undefined)) {
            setBloqueoAnalizar(true)
            setBloqueo(true)
            setGanador(isGanadorX ? '¡¡ JUGADOR X GANA !!' : isGanadorO ? '¡¡ JUGADOR O GANA !!' : '¡¡EMPATE!!!')

        }

        if (state.opcionInicio === 2 || state.opcionInicio === 3 && state.turno != 'X') {

            if (state.turno == 'O' && !isGanadorO && !isGanadorX && state.tablero.some(item => item == undefined)) {
                setBloqueo(true)
                setPensandoAI(true)
                recibirTiro()
            }
        }

        // Estamos empezando logica para ia vs ia 
        if (state.opcionInicio === 3 && state.turno == "X") {


            if (state.turno == 'X' && !isGanadorO && !isGanadorX && state.tablero.some(item => item == undefined)) {
                setBloqueo(true)
                recibirTiro()
            }
        }

    }, [state.tablero, RevisarGanador, bloqueoAnalizar, state.turno, TirarAI])


    return (
        <div className="game-container">
            {/* Glows de fondo */}
            <div className="glow-purple" />
            <div className="glow-cyan" />

            {/* Header con marcador de puntos e indicador de turno */}
            <header className="game-header">

                {bloqueoAnalizar && <div className="winner-banner">
                    <h1 className="winner-title winner-highlight">
                        {ganador}
                    </h1>
                </div>}

                {/* <div className="scoreboard">
                    <div className="player-score">
                        <span className="player-label player-x">Jugador X</span>
                        <span className="score-number">2</span>
                    </div>
                    <span className="score-divider">-</span>
                    <div className="player-score">
                        <span className="player-label player-o">Jugador O</span>
                        <span className="score-number">1</span>
                    </div>
                </div> */}

                <div className="turn-indicator">
                    Turno de: <span className="turn-highlight">{state.turno}</span>
                </div>

            </header>

            {/* Estado cuando la IA está pensando */}
            {
                pensandoAI && <div className="ai-thinking-badge">
                    <span className="ai-thinking-text">🤖 La IA está pensando</span>
                    <div className="dots-container">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                </div>
            }


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