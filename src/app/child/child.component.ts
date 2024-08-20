import { AfterViewInit, Component, ContentChild, ContentChildren, Input, QueryList, TemplateRef } from '@angular/core';
import { ChildContentComponent } from '../child-content/child-content.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements AfterViewInit{
  @Input() child: TemplateRef<any> | null = null;
  @ContentChild(ChildContentComponent) contentChild:ChildContentComponent | undefined;
  @ContentChildren(ChildContentComponent) contentChildren: QueryList<ChildContentComponent> | undefined;
  @ContentChildren('topThree') topThreeChildren: QueryList<ChildContentComponent> | undefined;

  constructor() {}

  ngAfterViewInit(): void {
    console.log('this from afterViewInit', this.contentChild);
    console.log('contentChildren', this.contentChildren?.toArray());
    console.log('contentChildren', this.topThreeChildren?.toArray());
  }
}
