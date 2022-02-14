import { actionType } from "../actions/colorAction";

const initialState = {
    red: 0,
    blue: 0,
    green: 0,
}

const colorReducer = (state = initialState, action) => {
    switch(action.type) {

        case actionType.INCREASE_COLOR:
            let aux = action.color === 'red' ? 
                {...state, red: state.red + 1} : action.color === 'blue' ? 
                    {...state, blue: state.blue + 1} : {...state, green: state.green + 1}
            return aux;

        case actionType.DECREASE_COLOR:
            let aux2 = action.color === 'red' ? 
                {...state, red: state.red - 1} : action.color === 'blue' ? 
                    {...state, blue: state.blue - 1} : {...state, green: state.green - 1}
            return aux2;

        default:
            return state;
    }
}

export default colorReducer;