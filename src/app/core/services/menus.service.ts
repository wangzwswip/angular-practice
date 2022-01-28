import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenusService {

  constructor() { }
  _Menus = [
    {
      title: '首页',
      link: 'index',
      icon: 'home',
      level: 1,
      open: false,
      selected: false,
      disabled: false,
    },
    {
      title: '图表',
      link: '',
      icon: 'line-chart',
      level: 1,
      open: false,
      selected: false,
      disabled: false,
      children: [
        {
          title: '折线图',
          link: '',
          icon: '',
          level: 2,
          selected: false,
          disabled: false,
          children: [
            {
              title: '基础图',
              link: 'charts/line/one',
              icon: '',
              level: 3,
              selected: false,
              disabled: false,

            }
          ]
        },
        {
          title: '柱状图',
          link: '',
          icon: '',
          level: 2,
          open: false,
          selected: false,
          disabled: false,
          children: [
            {
              title: '基础图',
              link: 'charts/bar/one',
              icon: '',
              level: 3,
              selected: false,
              disabled: false,
            },
            {
              title: '对立图',
              link: 'charts/bar/two',
              icon: '',
              level: 3,
              selected: false,
              disabled: false,
            }
          ]
        },
        {
          title: '甘特图',
          link: '',
          icon: '',
          level: 2,
          open: false,
          selected: false,
          disabled: false,
          children: [
            {
              title: '类别图',
              link: 'charts/gantter/one',
              icon: '',
              level: 3,
              selected: false,
              disabled: false,
            },
            {
              title: '时间图',
              link: 'charts/gantter/two',
              icon: '',
              level: 3,
              selected: false,
              disabled: false,
            },
          ]
        },
        {
          title: '饼图',
          link: '',
          icon: '',
          level: 2,
          open: false,
          selected: false,
          disabled: false,
          children: [
            {
              title: '3D图',
              link: 'charts/pie/one',
              icon: '',
              level: 3,
              selected: false,
              disabled: false,
            },
          ]
        }
      ]
    },
    {
      title: '列表页',
      link: '',
      icon: 'appstore',
      level: 1,
      open: false,
      selected: false,
      disabled: false,
      children: [
        {
          title: '基础表格',
          link: 'list/list-table',
          level: 2,
          open: false,
          selected: false,
          disabled: false,
          icon: '',
        },
        {
          title: '菜单管理',
          link: 'list/tree',
          icon: '',
          level: 2,
          open: false,
          selected: false,
          disabled: false,
        }
      ]
    },
    {
      title: '高德地图',
      link: '',
      icon: 'compass',
      children: [
        {
          title: '基础使用',
          link: 'map/start',
          icon: '',
        },
        {
          title: '地图图层',
          link: 'map/layers',
          icon: '',
        },
        {
          title: '地图标记',
          link: 'map/marker',
          icon: '',
        },
        {
          title: '插件工具',
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
  title: string;
  /** 路由 */
  link?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  /** 图标 */
  icon?: string;
  /** 二级菜单 */
  children?: Menu[];
}
