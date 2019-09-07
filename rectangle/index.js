const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({type: null}); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 

$('.change-rectangle').click(function(){
    let type = $(this).data('action') 
    let prop = $(this).data('prop')
    let value = $(this).data('value')
    dispatch({type : type, prop : prop, value : value}) 
})