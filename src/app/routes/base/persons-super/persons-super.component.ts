import { Component, OnInit, ContentChild, ContentChildren,QueryList} from '@angular/core';
import {ChildRefSuperDirective} from "../child-ref-super.directive";

@Component({
  selector: 'app-persons-super',
  templateUrl: './persons-super.component.html',
  styleUrls: ['./persons-super.component.scss']
})
export class PersonsSuperComponent implements OnInit {
  persons: { name: string; money: number; render?: string; }[] = [
    { name: '杰克', money: 120, render: 'temp1' },
    { name: '李莉', money: 210, render: 'temp2' },
    { name: '张三', money: 170, render: 'temp3' },
  ];
  @ContentChildren(ChildRefSuperDirective) childrenRef!: QueryList<ChildRefSuperDirective>;
  get tempRefs() {
    const aObj: any = {};
    this.childrenRef.forEach(template => {
      const key: string = template.appChildRef;
      aObj[key] = template;
    })
    return aObj;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
