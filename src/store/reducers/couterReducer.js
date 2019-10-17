import * as Types from "../actionTypes";


export default function counterReducer(state = { number: 0 }, action) {
    switch (action.type) {
        case Types.increment:
            return { ...state, number: state.number + 1 }
        case Types.decrement:
            return { ...state, number: state.number - 1 }
        default:
            return state
    }
}