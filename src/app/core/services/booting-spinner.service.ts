/**
 * @file 首屏启动器服务
 * @desc app/services/spinner
 */

import { Injectable } from '@angular/core';

@Injectable()
export class BootingSpinnerService {
  private element: HTMLElement;
  private selector: string = 'preloader';
  constructor() {
    this.element = document.getElementById(this.selector)!;
  }
  public show(): void {
    this.element.style.display = 'block';
  }

  public hide(delay: number = 0): void {
    setTimeout(() => {
      if (this.element) {
        this.element.style.display = 'none';
      }
    }, delay);
  }
}
