import { Component, OnInit } from '@angular/core';
import {Observable, switchMap} from "rxjs";
import {HeroService} from "../hero.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-base-three',
  templateUrl: './base-three.component.html',
  styleUrls: ['./base-three.component.scss']
})
export class BaseThreeComponent implements OnInit {
  heroes$!: Observable<any>
  selectedId = 0
  constructor(private service: HeroService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.heroes$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = parseInt(params.get('id')!, 10);
        return this.service.getHeroes();
      })
    )
  }

}
