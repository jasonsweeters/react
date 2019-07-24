import {createStore} from 'redux';


var defaultState = {
    originAmount: '0.00',
    showToast: false,
    toastToggle: false,
    toastHeader: "",
    toastMessage: ""
  };
  
  function amount(state = defaultState, action){
    if(action.type === 'TOAST_MESSAGE_TOGGLE'){

      let newState = Object.assign({}, state, {
        showToast: true,
        toastToggle: !state.toastToggle,
        toastHeader: "Success!",
        toastMessage: "New User sucessfully created."
      });

      if(!newState.toastToggle){
        newState.toastHeader = "Faliure";
        newState.toastMessage = "Unable to create new User.";
       }

      return newState;
    }

    if(action.type === 'RESET'){
      return Object.assign({}, state, {
        showToast: false,
        toastToggle: true,
        toastHeader: "",
        toastMessage: ""
      });
    }

    return state;
  }
  
  var store = createStore(amount);
  
  export default store;
  