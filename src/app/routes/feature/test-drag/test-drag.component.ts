import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-drag',
  templateUrl: './test-drag.component.html',
  styleUrls: ['./test-drag.component.scss']
})
export class TestDragComponent implements OnInit {
  draggable :boolean = true
  constructor() { }

  ngOnInit(): void {
  }

}
