import { Directive, Input, TemplateRef  } from '@angular/core';

@Directive({
  selector: '[appChildRefSuper]'
})
export class ChildRefSuperDirective {
  @Input('appChildRefSuper') appChildRef!: string;
  constructor(public templateRef: TemplateRef<any>) { }

}
