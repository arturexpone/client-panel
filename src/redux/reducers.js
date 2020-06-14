import {Constance} from './constance';


const notifyReducerInitState = {
  message: null,
  messageType: null,
  detailsUserId: '',
};

export const notifyReducer = (state = notifyReducerInitState, action) => {
  switch (action.type) {
    case Constance.NOTIFY_USER:
      return {
        ...state,
        message: action.message,
        messageType: action.messageType
      }
    default:
      return state
  }
};


export const settingsReducer = (state = {}, action) => {
  switch (action.type) {
    case Constance.DISABLE_BALANCE_ON_ADD:
      return {
        ...state,
        disableBalanceOnAdd: action.payload
      }
    case Constance.DISABLE_BALANCE_ON_EDIT:
      return {
        ...state,
        disableBalanceOnEdit: action.payload
      }
    case Constance.ALLOW_REGISTRATION:
      return {
        ...state,
        allowRegistration: action.payload
      }
    default:
      return state
  }
};
