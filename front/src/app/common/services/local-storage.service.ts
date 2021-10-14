import { Injectable } from '@angular/core';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor(private notifier: NotificationService) {}

  canUse(): boolean {
    // El navegador no puede usar "localStorage"
    if (typeof Storage === 'undefined') {
      this.notifier.showError(
        'Sorry, your browser does not support web storage'
      );
      return false;
    }
    // El script JS no está detrás de un dominio
    // (se ha abierto directamente desde el sistema de archivos
    // y no a través de un servidor HTTP)
    if (localStorage == null) {
      this.notifier.showError(
        "Only accesible through HTTP server (that's it, on a domain)"
      );
      return false;
    }
    return true;
  }

  clear(name?: string) {
    if (this.canUse()) {
      if (name != undefined) {
        localStorage.removeItem(name);
      } else {
        localStorage.clear();
      }
    }
  }

  set(name: string, values: any): boolean {
    if (this.canUse()) {
      try {
        localStorage.setItem(name, JSON.stringify(values));
        return true;
      } catch (e) {
        this.notifier.showError('Error: The information cannot be saved');
        return false;
      }
    } else {
      return false;
    }
  }

  get(name: string): any {
    if (!this.canUse()) {
      return undefined;
    }
    let value = localStorage.getItem(name);
    if (value != undefined) {
      return JSON.parse(value);
    } else {
      return undefined;
    }
  }
}
