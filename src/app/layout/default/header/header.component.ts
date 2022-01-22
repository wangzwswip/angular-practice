import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, fromEvent } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  resize = document.body.clientWidth;
  isCollapsed = false;
  @Output() nzCollapsed: EventEmitter<any> = new EventEmitter()
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    /**监听浏览器的变化 */
    fromEvent(window, 'resize')
      .subscribe((e: any) => {
        this.resize = e.currentTarget['innerWidth'];
      });
  }

  changeIcon() {
    this.isCollapsed = !this.isCollapsed;
    this.nzCollapsed.emit();
  }

  logout() {
    // this.tokenService.clear();
    this.router.navigateByUrl('passport/login');
  }

}
