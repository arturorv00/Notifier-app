import { Component, OnInit, OnDestroy } from '@angular/core';
import { Notification } from './notification.model';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import * as NotificationListActions from './store/notification-list.actions';
import * as FromNotificationList from './store/notification-list.reducers';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  intervalTime = 10000;
  interval: any;
  autorefresh: true;
  notifications: Notification[];

  constructor(private store: Store<FromNotificationList.AppState>) {}

  ngOnInit() {
    this.subscription = this.store
      .select('notificationList')
      .subscribe(data => {
        this.notifications = data.notifications;

        // Make sure the setinterval is not created every time the state changes
        if (this.autorefresh !== data.autorefresh) {
          if (data.autorefresh) {
            this.activateTimer();
          } else {
            this.clearTimer();
          }
          this.autorefresh = data.autorefresh;
        }
      });
  }

  ngOnDestroy() {
    this.clearTimer();
  }

  activateTimer() {
    this.interval = setInterval(() => {
      this.onAddNotification();
    }, this.intervalTime);
  }

  clearTimer() {
    clearInterval(this.interval);
  }

  onAddNotification() {
    const newNotification = new Notification(
      'Dummy Notification',
      'Dummy notification description',
      new Date()
    );
    this.store.dispatch(
      new NotificationListActions.AddNotification(newNotification)
    );
  }
}
