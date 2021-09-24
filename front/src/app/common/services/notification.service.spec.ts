import { TestBed } from '@angular/core/testing';
import { NotificationService } from './notification.service';
import { Notification } from '../models/notification.model';

describe('NotificationService', () => {
  let service: NotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotificationService],
    });
    service = TestBed.inject(NotificationService);
  });

  it('should enviar y obtener una notificacion', () => {
    const msg = 'Prueba';
    const service: NotificationService = TestBed.get(NotificationService);
    service.getNotification().subscribe(
      (noti) => {
        console.log(noti.detail);
        expect(noti.detail).toEqual(msg);
      },
      (error) => {
        fail(error);
      }
    );
    service.showError(msg);
    service.showSuccess(msg);
    service.showWarning(msg);
    service.showInfo(msg);
  });
  /*
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
*/
});
