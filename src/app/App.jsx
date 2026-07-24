import React, { useContext } from 'react'
import { useReducer, useState } from 'react'
import { InicioJuego } from '../components/InicioJuego'
import { reducer } from '../reducers'
import { Inicio } from '../types/inicioType'
import { Juego } from '../components/Juego'
import { TotitoContext } from '../Context'


function App() {
  const { dispatch, state } = useContext(TotitoContext)

  const onContinuar = () => {

    console.log('hola',state.opcionInicio)
    
    if (state.opcionInicio > 0 && state.opcionInicio <= 3) {
      dispatch({ type: Inicio.continuar })

    } else {
      alert('Selecciona una opcion valida')
    }
  }

  return (
    <>

      {!state.continuar && <InicioJuego OnContinuar={onContinuar} />}
      {state.continuar && <Juego />}

    </>
  )

}

export default App
