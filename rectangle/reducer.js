const initialState = {
    width: 100,
    height: 200,
    color: "#FF00FF"
};

const reducer = (state = initialState, action) => {
    const { type, prop, value }  = action;
    let newState = {};
    switch(type) {
        case 'size':
            newState[prop] = state[prop] + value;
            return Object.assign({}, state, newState)
            break;

        case 'color':
            newState[type] = value;
            return Object.assign({}, state, newState)
            break;
    }

    
    return state;
}