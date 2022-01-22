import { Component, OnInit, ViewChild } from '@angular/core';
import { NzFormatEmitEvent, NzTreeComponent, NzTreeNodeOptions } from 'ng-zorro-antd/tree';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {
  @ViewChild('treeCom', {static: false}) treeCom!: NzTreeComponent;
  searchValue: string = '';
  nodes = [
    {
      title: '安装工单',
      key: '100',
      expanded: true,
      children: [
        { title: '安装工单', key: '1001', icon: 'container', isLeaf: true },
      ]
    },
    {
      title: 'NB烟感数据',
      key: '101',
      expanded: true,
      children: [
        { title: '报警数据', key: '1002', icon: 'home', isLeaf: true },
        { title: '设备自检', key: '1003', icon: 'exception', isLeaf: true },
        { title: '设备故障', key: '1004', icon: 'setting', isLeaf: true },
        { title: '设备心跳', key: '1005', icon: 'smile', isLeaf: true },
      ]
    }
  ];
  title = '安装工单';
  constructor() { }

  ngOnInit(): void {
  }
  nzEvent(event: NzFormatEmitEvent): void {
    this.title = event.node!.title;
    const key = event.keys;
    console.log(this.treeCom.getSelectedNodeList());
  }
  searchNode(event: NzFormatEmitEvent): void {
    console.log(event, this.treeCom.getMatchedNodeList().map((v: { title: any; }) => v.title));
  }

}
