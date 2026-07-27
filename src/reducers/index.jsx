import { Inicio, OpcionesValidas } from "../types/inicioType"

const reducer = (state, action) => {
    let nuevoArreglo;

    switch (action.type) {
        case Inicio.seleccionar:

            return {
                ...state,
                opcionInicio: action.payload.opcionInicio,
                continuar: true

            };

        case Inicio.continuar:
            return {
                ...state,
                continuar: true
            }

        case Inicio.marcar:
            nuevoArreglo = [...state.tablero]
            nuevoArreglo[action.payload.index] = action.payload.Symbol
            return {
                ...state,
                tablero: [...nuevoArreglo],
                turno: state.turno == 'X' ? 'O' : 'X'
            }


        default:
            return state
            break;

    }
}

export { reducer }