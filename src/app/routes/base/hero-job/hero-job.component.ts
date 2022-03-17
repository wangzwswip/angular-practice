import { Component, Input } from '@angular/core';
import {AdComponent} from "../ad.component";
@Component({
  selector: 'app-hero-job',
  templateUrl: './hero-job.component.html',
  styleUrls: ['./hero-job.component.scss']
})
export class HeroJobComponent implements AdComponent {
  @Input() data: any;
  constructor() { }



}
