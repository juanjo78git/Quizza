import { Component } from '@angular/core';
import { NotificationService } from './common/services/notification.service';
import { Notification } from './common/models/notification.model';
import { Observable, Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quizza';

  private notificationSub!: Subscription;
  public messages: Notification[] = [];

constructor(private notifications : NotificationService) { }

  ngOnInit() {
     this.notificationSub =
     this.notifications.getNotificacion().subscribe(
        (notificacion: Notification) => {
            this.messages.push(notificacion);
         }
      );
  }

  ngOnDestroy() {
        if (this.notificationSub) {
            this.notificationSub.unsubscribe();
        }
        this.messages = [];
    }
  getMessages() : Notification[] {
    return this.messages;
  }
  clearMessages() {
    this.messages = [];
  }
  deleteMessage(notif : Notification) {
    this.messages.splice(this.messages.indexOf(notif), 1);
  }
}
