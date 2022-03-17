import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-example',
  templateUrl: './directive-example.component.html',
  styleUrls: ['./directive-example.component.scss']
})
export class DirectiveExampleComponent implements OnInit {
  color :string = 'red'
  radioValue: string = ''
  defaultValue: string = 'red'
  showValue :boolean = true
  constructor() { }

  ngOnInit(): void {
  }

}
