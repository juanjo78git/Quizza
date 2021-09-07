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
  showSuccess(message: string, summary?: string): void {
    this.zone.run(() => {
      this.show('success', message, summary)
    });
  }

  showError(message: string, summary?: string): void {
    this.zone.run(() => {
      this.show('error', message, summary)
    });
  }


  showInfo(message: string, summary?: string) {
    this.zone.run(() => {
      this.show('info', message, summary)
    });
  }

  showWarning(message: string, summary?: string) {
    this.zone.run(() => {
      this.show('warning', message, summary)
    });
  }

  private show(severity: string, message: string, summary?: string) {
    const notificacion: Notification = {
      severity: severity,
      summary: summary,
      detail: message
    };

    this.notify(notificacion);

  }

  private notify(notificacion: Notification): void {
    this.showNotificacionSource.next(notificacion);
    // UTILIZANDO MATERIAL PARA NOTIFICACIONES
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

  }
}
