import {Constance} from './constance';

export const notifyUser = (message, messageType)  => ({type: Constance.NOTIFY_USER, message, messageType});
export const disableBalanceOnAdd = ()  => ({type: Constance.DISABLE_BALANCE_ON_ADD});
export const disableBalanceOnEdit = ()  => ({type: Constance.DISABLE_BALANCE_ON_EDIT});
export const allowRegistration = ()  => ({type: Constance.ALLOW_REGISTRATION});