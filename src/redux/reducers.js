import {Constance} from './constance';


const notifyReducerInitState = {
  message: null,
  messageType: null
};

const settingReducerInitState = {
  disableBalanceOnAdd: true,
  disableBalanceOnEdit: false,
  allowRegistration: false
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
}


export const settingsReducer = (state = settingReducerInitState, action) => {
  switch (action.type) {
    case Constance.DISABLE_BALANCE_ON_ADD:
      return {
        ...state,
        disableBalanceOnAdd: !state.disableBalanceOnAdd
      }
    case Constance.DISABLE_BALANCE_ON_EDIT:
      return {
        ...state,
        disableBalanceOnEdit: !state.disableBalanceOnEdit
      }
    case Constance.ALLOW_REGISTRATION:
      return {
        ...state,
        allowRegistration: !state.allowRegistration
      }
    default:
      return state
  }
}