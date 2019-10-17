import { createStore } from "../myredux";



import { counterReducer } from "./reducers";



export default createStore(counterReducer)