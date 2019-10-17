function createStore(reducer, initState) {
    let currentState = initState;   // store 里的状态
    let listeners = [];             // 监听内容的容器


    // 获取实时状态
    function getState() {
        return currentState;
    }


    // 订阅
    function subscribe(fn) {
        if (typeof fn !== "function") {
            throw new Error("监听的内容必须是函数类型")
        }
        listeners.push(fn)
        return listeners.filter(item => item !== fn);
    }

    // 发布
    function dispatch(action) {
        currentState = reducer(currentState,action);
        listeners.forEach(listener => listener())
    }


    dispatch({});  // 用于初始化状态

    return {
        getState,
        subscribe,
        dispatch
    }

}

export default createStore;