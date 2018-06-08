import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import * as NotificationListActions from '../store/notification-list.actions';
import * as FromNotificationList from '../store/notification-list.reducers';

@Component({
  selector: 'app-notification-item',
  templateUrl: './notification-item.component.html',
  styleUrls: ['./notification-item.component.scss']
})
export class NotificationItemComponent implements OnInit {
  @Input() notification: Notification;
  @Input() index: number;

  constructor(private store: Store<FromNotificationList.AppState>) {}

  ngOnInit() {}

  onClose(index) {
    this.store.dispatch(new NotificationListActions.DeleteNotification(index));
  }
}
