const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({ type: null }); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 
$('.sort-tweets').click(function(){
    let type = $(this).data('type');
    let kind = $(this).data('kind');
    dispatch({ type : type, kind : kind })
})
