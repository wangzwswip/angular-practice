import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-resize',
  templateUrl: './test-resize.component.html',
  styleUrls: ['./test-resize.component.scss']
})
export class TestResizeComponent implements OnInit {
  resize :boolean = true
  constructor() { }

  ngOnInit(): void {
  }

}
