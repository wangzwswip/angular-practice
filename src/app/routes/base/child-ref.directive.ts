import { Directive, TemplateRef  } from '@angular/core';

@Directive({
  selector: '[appChildRef]'
})
export class ChildRefDirective {

  constructor(public templateRef: TemplateRef<any>) { }

}
