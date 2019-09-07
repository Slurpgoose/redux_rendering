const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({ type: null }); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 

$('.card-btn').click(function(){
    let card = $(this).data('value');
    let action = $(this).data('action');
    dispatch({type : action, value : card})
})