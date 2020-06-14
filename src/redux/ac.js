import {Constance} from './constance';

export const notifyUser = (message, messageType)  => ({type: Constance.NOTIFY_USER, message, messageType});