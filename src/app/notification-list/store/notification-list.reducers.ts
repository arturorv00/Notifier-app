import * as NotificationListActions from './notification-list.actions';
import { Notification } from '../notification.model';

export interface AppState {
  NotificationList: State;
}

export interface State {
  autorefresh: boolean;
  notifications: Notification[];
}

const initialState: State = {
  autorefresh: true,
  notifications: [
    new Notification(
      'Facebook',
      'You got a message',
      new Date(2018, 11, 24, 10, 33)
    ),
    new Notification(
      'Twitter',
      'You got a message',
      new Date(2018, 11, 24, 10, 33)
    )
  ]
};

export function NotificationListReducers(
  state = initialState,
  action: NotificationListActions.NotificationListActions
) {
  switch (action.type) {
    case NotificationListActions.ADD_NOTIFCATION:
      return {
        ...state,
        notifications: [action.payload, ...state.notifications]
      };

    case NotificationListActions.DELETE_NOTIFCATION:
      const oldNotifications = [...state.notifications];
      oldNotifications.splice(action.payload, 1);
      return { ...state, notifications: oldNotifications };

    case NotificationListActions.SET_AUTOREFRESH:
      return { ...state, autorefresh: action.payload };

    default:
      return state;
  }
}
