import { Component, OnInit } from '@angular/core';
import {HeroService} from "../hero.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Observable, switchMap} from "rxjs";

interface Hero {
  id: number;
  name: string;
}
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  hero$! :Observable<Hero>
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: HeroService
  ) { }

  ngOnInit(): void {
    // snapshot 只会得到这些参数的初始值。如果路由器可能复用该组件，那么就该用 paramMap 可观察对象的方式
    const id = this.route.snapshot.paramMap.get('id')!;

    this.hero$ = this.service.getHero(id);
    // 本例不会复用，如果复用时用下面这种情况
    // this.hero$ = this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) => this.service.getHero(params.get('id')!))
    // )
  }

  gotoHeroes(hero: Hero) {
    const heroId = hero ? hero.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    // 矩阵 URL标记法。
    this.router.navigate(['../../base-three', { id: heroId, foo: 'foo' }], {relativeTo: this.route});
  }

}
