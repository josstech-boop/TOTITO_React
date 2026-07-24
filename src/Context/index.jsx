import { createContext, useReducer } from "react";
import { reducer } from "../reducers";
import { Inicio } from "../types/inicioType";

const TotitoContext = createContext()

const TotitoProvider = ({ children }) => {
    const [state, dispatch] = useReducer(
        reducer, {
        opcionInicio: '',
        continuar: false,
        tablero: [undefined, undefined, undefined,
            undefined, undefined, undefined,
            undefined, undefined, undefined,],
        turno: 'X'
    })



    const MarcaHumano = (index) => {
        dispatch({ type: Inicio.marcar, payload: { index, Symbol: state.turno } })
        console.log(state)
    }

    const ganadores = [

        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]

    ]

    const RevisarGanador = (symbol) => {

        const isGanadorX = ganadores.some(item => item.every(indice => state.tablero[indice] == 'X'))
        const isGanadorO = ganadores.some(item => item.every(indice => state.tablero[indice] == 'O'))

        return { isGanadorX, isGanadorO }
    }

    return (
        <TotitoContext.Provider value={
            {
                dispatch,
                state,
                MarcaHumano,
                RevisarGanador,
            }

        }>
            {children}

        </TotitoContext.Provider>
    )
}

export { TotitoProvider, TotitoContext } 