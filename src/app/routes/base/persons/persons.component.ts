import {Component, ContentChild, OnInit} from '@angular/core';
import {ChildRefDirective} from "../child-ref.directive";

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss']
})
export class PersonsComponent implements OnInit {
  persons: { name: string; money: number; }[] = [
    { name: '张明远', money: 120 },
    { name: '李志', money: 210 },
    { name: '梁艺恒', money: 170 },
  ]
  @ContentChild(ChildRefDirective, {static: true}) childRef!: ChildRefDirective
  constructor() { }

  ngOnInit(): void {
  }

}
