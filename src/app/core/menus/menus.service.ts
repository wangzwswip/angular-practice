import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenusService {

  constructor() { }
  _Menus = [
    {
      text: '首页',
      link: 'index',
      icon: 'home',
      children: []
    },
    {
      text: '图表',
      link: '',
      icon: 'line-chart',
      children: [
        {
          text: '折线图',
          link: 'charts/line',
          icon: '',
        }
      ]
    },
    {
      text: '列表页',
      link: '',
      icon: 'appstore',
      children: [
        {
          text: '基础表格',
          link: 'list/list-table',
          icon: '',
        },
        {
          text: '菜单管理',
          link: 'list/tree',
          icon: '',
        }
      ]
    },
    {
      text: '高德地图',
      link: '',
      icon: 'compass',
      children: [
        {
          text: '基础使用',
          link: 'map/start',
          icon: '',
        },
        {
          text: '地图图层',
          link: 'map/layers',
          icon: '',
        },
        {
          text: '地图标记',
          link: 'map/marker',
          icon: '',
        },
        {
          text: '插件工具',
          link: 'map/tool',
          icon: '',
        },
      ]
    },
  ];
  menus() {
    return this._Menus;
  }
}
/** 菜单类：待用 */
export interface Menu {
  [key: string]: any;
  /** 文本 */
  text: string;
  /** 路由 */
  link?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  /** 图标 */
  icon?: string;
  /** 二级菜单 */
  children?: Menu[];
}
