import React from "react";
import * as actions from "../store/actions/counterAction"

import store from "../store";

class Counter extends React.Component {

    state = {
        number: 0
    }
    componentDidMount() {
        this.unSubscribe = store.subscribe(() => {
            this.setState(store.getState)
        })
    }
    componentWillUnmount() {
        this.unSubscribe();
    }

    increment() {
        store.dispatch(actions.increment);
    }
    decrement(){
        store.dispatch(actions.decrement);
    }
    render() {
        return <div>
            <p>{this.state.number}</p>
            <button onClick={this.increment}>+</button>
            <button onClick={this.decrement}>-</button>
        </div>
    }

}


export default Counter;