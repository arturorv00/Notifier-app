import { Action } from '@ngrx/store';
import { Notification } from '../notification.model';

export const GET_NOTIFCATIONS = 'GET_NOTIFCATIONS';
export const ADD_NOTIFCATION = 'ADD_NOTIFCATION';
export const DELETE_NOTIFCATION = 'DELETE_NOTIFCATION';
export const SET_AUTOREFRESH = 'SET_AUTOREFRESH';

export class AddNotification implements Action {
  readonly type = ADD_NOTIFCATION;

  constructor(public payload: Notification) {}
}

export class DeleteNotification implements Action {
  readonly type = DELETE_NOTIFCATION;

  constructor(public payload: number) {}
}

export class SetAutoRefresh implements Action {
  readonly type = SET_AUTOREFRESH;

  constructor(public payload: boolean) {}
}

export type NotificationListActions =
  | AddNotification
  | DeleteNotification
  | SetAutoRefresh;
