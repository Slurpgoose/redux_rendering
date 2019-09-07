const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({ type: null }); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 

$('#nameForm').submit(function(e){
    e.preventDefault();
    let action = $(this).data('action');
    let name = $(this).children('input').val()
    dispatch({ type: action, value : name});
})