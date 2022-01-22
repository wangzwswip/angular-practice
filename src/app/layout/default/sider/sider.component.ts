import { Component, OnInit, Input } from '@angular/core';
import { MenusService } from 'src/app/core/menus/menus.service';

@Component({
  selector: 'app-sider',
  templateUrl: './sider.component.html',
  styleUrls: ['./sider.component.scss']
})
export class SiderComponent implements OnInit {
  @Input() isCollapsed!: boolean;
  triggerTemplate = null;
  menus;
  constructor(private menu: MenusService) {
    this.menus = this.menu.menus();
  }

  ngOnInit(): void {
  }

}
