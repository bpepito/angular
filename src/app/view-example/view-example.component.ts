import { AfterViewInit, Component, OnInit, QueryList, TemplateRef, ViewChild, ViewChildren } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-view-example',
  templateUrl: './view-example.component.html',
  styleUrl: './view-example.component.css'
})
export class ViewExampleComponent implements OnInit, AfterViewInit {
  @ViewChild('htmlElement') htmlElement: TemplateRef<any> | undefined;
  @ViewChild('childComp') childComp1: ChildComponent | undefined;
  @ViewChildren('childrenComp') childrenComp1:
    | QueryList<ChildComponent>
    | undefined;

  ngOnInit(): void {
    console.log('this from onInit', this.htmlElement);
  }

  ngAfterViewInit(): void {
    // console.log('this from afterViewInit', this.htmlElement);
    // console.log('this from afterViewInit', this.childComp1);
    console.log('this from afterViewInit', this.childrenComp1?.toArray());
  }
}
