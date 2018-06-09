import { TestBed, async } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';
import { NotificationListComponent } from '../notification-list/notification-list.component';
import { NotificationItemComponent } from '../notification-list/notification-item/notification-item.component';
import { NotificationListReducers } from '../notification-list/store/notification-list.reducers';
import { TimeAgoPipe } from 'time-ago-pipe';
import { RefreshComponent } from '../refresh/refresh.component';

describe('RefreshComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NotificationListComponent,
        NotificationItemComponent,
        TimeAgoPipe,
        RefreshComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        StoreModule.forRoot({ notificationList: NotificationListReducers })
      ],
      providers: []
    });
  });

  it('should create the Notification-List Component', () => {
    const fixture = TestBed.createComponent(NotificationListComponent);
    const componentIns = fixture.debugElement.componentInstance;
    expect(componentIns).toBeTruthy();
  });

  it('should have 2 notifications', () => {
    const fixture = TestBed.createComponent(NotificationListComponent);
    const compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    expect(compiled.querySelectorAll('.list-group-item').length).toBe(2);
  });
});
