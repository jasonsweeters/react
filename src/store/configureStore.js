import {createStore} from 'redux';


var defaultState = {
    originAmount: '0.00',
    showToast: false,
    toastToggle: true,
    toastHeader: "",
    toastMessage: ""
  };
  
  function amount(state = defaultState, action){
    if(action.type === 'TOAST_MESSAGE_TOGGLE'){
      return Object.assign({}, state, {
        showToast: true,
        toastToggle: !state.toastToggle
      });
    }

    if(action.type === 'RESET'){
      return Object.assign({}, state, {
        showToast: false,
        toastToggle: true
      });
    }

    return state;
  }
  
  var store = createStore(amount);
  
  export default store;
  