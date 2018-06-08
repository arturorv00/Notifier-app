import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as NotificationListActions from '../notification-list/store/notification-list.actions';
import * as FromNotificationList from '../notification-list/store/notification-list.reducers';

@Component({
  selector: 'app-refresh',
  templateUrl: './refresh.component.html',
  styleUrls: ['./refresh.component.scss']
})
export class RefreshComponent implements OnInit {
  subscription: Subscription;
  autorefresh = true;

  constructor(private store: Store<FromNotificationList.AppState>) {}

  ngOnInit() {
    this.subscription = this.store
      .select('notificationList')
      .subscribe(data => {
        this.autorefresh = data.autorefresh;
      });
  }

  change($event) {
    this.store.dispatch(
      new NotificationListActions.SetAutoRefresh($event.target.checked)
    );
  }
}
