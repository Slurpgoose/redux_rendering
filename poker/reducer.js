const initialState = [
    {
        value: "K",
        suit: "C"
    },
    {
        value: "K",
        suit: "D"
    }
];

const reducer = (state = initialState, action) => {
    const { type }  = action;
    const { value } = action;
    switch(type) {
        case 'update':
            return updateCard(state, value)
            break;
    }

    
    return state;
}


function updateCard(original, value){
    let new_card = chooseCard();
    if(value == 1){
        return [new_card, ...original.slice(value)]
    } 
    else {
        return [...original.slice(0, value-1), new_card]
    }
}

function chooseCard(){
    return {value : chooseValue(), suit: chooseSuit()}
}

function chooseValue(){
    let values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'A', 'J', 'K', 'Q'];
    let ind = getRandomInt(values.length)
    return values[ind]
}

function chooseSuit() {
    let suites = ['S', 'H', 'D', 'C'];
    let ind = getRandomInt(suites.length)
    return suites[ind]
}

function getRandomInt(max){
    return Math.floor((Math.random() * max));
}