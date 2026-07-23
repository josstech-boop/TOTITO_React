import { useReducer, useState } from 'react'
import './app.css'
import { Inicio, OpcionesValidas } from '../types/inicioType';
import { Reducer } from '../reducers';

function App() {

  const [state, dispatch] = useReducer(Reducer, {
    opcionInicio: OpcionesValidas.AIAI
  })

  const Onclick = (event) => {
    alert(`Selecciono la opcion: ${event.target.id}`)
    // console.log()
    dispatch({
      type: Inicio.seleccionar,
      payload: { opcionInicio: event.target.id }
    })
  }

  console.log(state)

  return (
    <div className="container">
      {/* Glows de fondo */}
      <div className="glow-purple" />
      <div className="glow-cyan" />

      <header className="header">
        <span className="badge">TIC TAC TOE</span>
        <h1 className="title">
          ELIGE TU <span className="title-highlight">MODO</span>
        </h1>
        <p className="subtitle">Selecciona cómo quieres jugar esta partida</p>
      </header>

      <main className="card-grid">
        {/* Opción 1: Humano vs Humano */}
        <button id='1' className={`card card-human ${state.opcionInicio == OpcionesValidas.HH && 'active'}`}
          onClick={Onclick}>
          <div className="icon-container notEvents">
            <span className="icon-green">👤</span>
            <span className="vs-text">VS</span>
            <span className="icon-cyan">👤</span>
          </div>
          <h2 className="card-title notEvents">Humano vs Humano</h2>
          <p className="card-desc notEvents">Desafía a un amigo en el mismo dispositivo</p>
          <span className="btn-tag-human notEvents">MODO LOCAL</span>
        </button>

        {/* Opción 2: Humano vs AI */}
        <button id='2' className={`card card-ai ${state.opcionInicio == OpcionesValidas.HA && 'active'}`}
          onClick={Onclick}>
          <div className="icon-container notEvents">
            <span className="icon-cyan">👤</span>
            <span className="vs-text">VS</span>
            <span className="icon-purple">🤖</span>
          </div>
          <h2 className="card-title notEvents">Humano vs IA</h2>
          <p className="card-desc notEvents">Pon a prueba tu habilidad contra el algoritmo</p>
          <span className="btn-tag-ai notEvents">DESAFÍO AI</span>
        </button>

        {/* Opción 3: AI vs AI */}
        <button id='3' className={`card card-sim ${state.opcionInicio == OpcionesValidas.AIAI && 'active'}`}
          onClick={Onclick}
        >
          <div className="icon-container notEvents">
            <span className="icon-purple">🤖</span>
            <span className="vs-text">VS</span>
            <span className="icon-green">🤖</span>
          </div>
          <h2 className="card-title notEvents">IA vs IA</h2>
          <p className="card-desc notEvents">Mira una simulación automática entre inteligencias</p>
          <span className="btn-tag-sim notEvents">ESPECTADOR</span>
        </button>
      </main>

      <footer className="footer">
        Totito Game • 2026
      </footer>
    </div>
  );
}

export default App
