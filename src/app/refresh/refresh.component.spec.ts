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

  it('should create the Component', () => {
    const fixture = TestBed.createComponent(RefreshComponent);
    const componentIns = fixture.debugElement.componentInstance;
    expect(componentIns).toBeTruthy();
  });

  it('should display the label', () => {
    const fixture = TestBed.createComponent(RefreshComponent);
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('label').textContent).toContain(
      'Auto-refresh'
    );
  });

  it('should the checkbox be checked', () => {
    const fixture = TestBed.createComponent(RefreshComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#autorefresh').checked).toBeTruthy();
  });

  it('should autorefresh var set to true', () => {
    const fixture = TestBed.createComponent(RefreshComponent);
    fixture.detectChanges();
    const componentIns = fixture.debugElement.componentInstance;
    expect(componentIns.autorefresh).toBeTruthy();
  });
});
