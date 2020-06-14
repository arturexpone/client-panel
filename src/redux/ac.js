import {Constance} from './constance';

let settings = JSON.parse(localStorage.getItem('settings'));

export const notifyUser = (message, messageType) => ({type: Constance.NOTIFY_USER, message, messageType});

export const disableBalanceOnAdd = () => {
  settings.disableBalanceOnAdd = !settings.disableBalanceOnAdd;
  localStorage.setItem('settings', JSON.stringify(settings));
  return {
    type: Constance.DISABLE_BALANCE_ON_ADD,
    payload: settings.disableBalanceOnAdd
  }
};
export const disableBalanceOnEdit = () => {
  settings.disableBalanceOnEdit = !settings.disableBalanceOnEdit;
  localStorage.setItem('settings', JSON.stringify(settings));
  return {
    type: Constance.DISABLE_BALANCE_ON_EDIT,
    payload: settings.disableBalanceOnEdit
  }
};
export const allowRegistration = () => {
  settings.allowRegistration = !settings.allowRegistration;
  localStorage.setItem('settings', JSON.stringify(settings));
  return {
    type: Constance.ALLOW_REGISTRATION,
    payload: settings.allowRegistration
  }
};