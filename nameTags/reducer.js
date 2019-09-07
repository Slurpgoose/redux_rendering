const initialState = [
    "Kamilah",
    "Stuart"
];

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type }  = action;
    const { value } = action;
    switch(type) {
        case 'create':
            console.log([...state, value])
            return [...state, value]
            break;
    }


    return state;
}