import {Constance} from './constance';


const initialState = {
  message: null,
  messageType: null
};

export const notifyReducer = (state = initialState, action) => {
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
}