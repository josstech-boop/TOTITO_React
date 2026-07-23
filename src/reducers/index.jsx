import { Inicio } from "../types/inicioType"

const initial = {
    opcionInicio: '',

}

const Reducer = (state, action) => {

    switch (action.type) {
        case Inicio.seleccionar:

            return {
                ...state,
                opcionInicio: action.payload.opcionInicio
            };
            break;
            default:
            break;

    }


}

export { Reducer }