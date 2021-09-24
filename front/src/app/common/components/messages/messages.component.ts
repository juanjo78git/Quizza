import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification.service';
import { Notification } from '../../models/notification.model';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent implements OnInit {
  private notificationSub!: Subscription;
  public messages: Notification[] = [];

  constructor(private notifications: NotificationService) {}

  ngOnInit() {
    this.notificationSub = this.notifications
      .getNotification()
      .subscribe((notification: Notification) => {
        this.messages.push(notification);
      });
  }

  ngOnDestroy() {
    if (this.notificationSub) {
      this.notificationSub.unsubscribe();
    }
    this.messages = [];
  }
  getMessages(): Notification[] {
    return this.messages;
  }
  clearMessages() {
    this.messages = [];
  }
  deleteMessage(notif: Notification) {
    this.messages.splice(this.messages.indexOf(notif), 1);
  }
}
