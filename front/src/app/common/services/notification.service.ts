import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Notification } from '../models/notification.model';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class NotificationService {

  private showNotificacionSource: Subject<Notification> = new Subject();

  constructor(
    public snackBar: MatSnackBar,
    private zone: NgZone) { }


  getNotificacion(): Observable<Notification> {
    return this.showNotificacionSource.asObservable();
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

  private show(severity: string, message: string, summary?: string, mode?: string) {
    const notificacion: Notification = {
      severity: severity,
      summary: summary,
      detail: message
    };
      this.notify(notificacion, mode);
  }

  private notify(notificacion: Notification, mode?: string): void {

    // UTILIZANDO MATERIAL PARA NOTIFICACIONES FLEET
    if (mode == "fleet") {
      let panelClass : string[] =  [];
      switch(notificacion.severity) {
        case 'info': {
          panelClass =  ['error','info','alert-info', 'alert-dismissible','fade'];
            break;
        }
        case 'success': {
          panelClass =  ['error','success','alert-success', 'alert-dismissible','fade'];
            break;
        }
        case 'warning': {
          panelClass =  ['error','warning','alert-warning', 'alert-dismissible','fade'];
          break;
        }
        case 'error': {
          panelClass =  ['error','danger','alert-danger', 'alert-dismissible','fade'];
        break;
        }
        default: {
          panelClass =  ['error','primary','alert-primary', 'alert-dismissible','fade'];
        break;
        }
      }
      // The second parameter is the text in the button.
      // In the third, we send in the css class for the snack bar.
      this.snackBar.open(notificacion.detail, 'X', {panelClass});
    } else {
      this.showNotificacionSource.next(notificacion);
    }
  }
}
