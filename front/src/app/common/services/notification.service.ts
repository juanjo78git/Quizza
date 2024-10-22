import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Notification } from '../models/notification.model';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private showNotificationSource: Subject<Notification> = new Subject();

  constructor(public snackBar: MatSnackBar, private zone: NgZone) {}

  getNotification(): Observable<Notification> {
    return this.showNotificationSource.asObservable();
  }
  showSuccess(message: string, summary?: string, mode?: string): void {
    this.zone.run(() => {
      this.show('success', message, summary, mode);
    });
  }

  showError(message: string, summary?: string, mode?: string): void {
    this.zone.run(() => {
      this.show('error', message, summary, mode);
    });
  }

  showInfo(message: string, summary?: string, mode?: string) {
    this.zone.run(() => {
      this.show('info', message, summary, mode);
    });
  }

  showWarning(message: string, summary?: string, mode?: string) {
    this.zone.run(() => {
      this.show('warning', message, summary, mode);
    });
  }

  private show(
    severity: string,
    message: string,
    summary?: string,
    mode?: string
  ) {
    const notification: Notification = {
      severity: severity,
      summary: summary,
      detail: message,
    };
    this.notify(notification, mode);
  }

  private notify(notification: Notification, mode?: string): void {
    // UTILIZANDO MATERIAL PARA NOTIFICACIONES FLEET
    if (mode == 'fleet') {
      let panelClass: string[] = [];
      switch (notification.severity) {
        case 'info': {
          panelClass = [
            'error',
            'info',
            'alert-info',
            'alert-dismissible',
            'fade',
          ];
          break;
        }
        case 'success': {
          panelClass = [
            'error',
            'success',
            'alert-success',
            'alert-dismissible',
            'fade',
          ];
          break;
        }
        case 'warning': {
          panelClass = [
            'error',
            'warning',
            'alert-warning',
            'alert-dismissible',
            'fade',
          ];
          break;
        }
        case 'error': {
          panelClass = [
            'error',
            'danger',
            'alert-danger',
            'alert-dismissible',
            'fade',
          ];
          break;
        }
        default: {
          panelClass = [
            'error',
            'primary',
            'alert-primary',
            'alert-dismissible',
            'fade',
          ];
          break;
        }
      }
      // The second parameter is the text in the button.
      // In the third, we send in the css class for the snack bar.
      this.snackBar.open(
        notification.detail,
        '<button type="button" class="btn-close" aria-label="Close"></button>',
        { panelClass }
      );
    } else {
      this.showNotificationSource.next(notification);
    }
  }
}
