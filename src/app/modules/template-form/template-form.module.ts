import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateFormRoutingModule } from './template-form-routing.module';
import { TemplateListComponent } from './components/pages/template-list/template-list.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TemplateListComponent
  ],
  imports: [
    TemplateFormRoutingModule,
    CommonModule,
    FormsModule
  ]
})
export class TemplateFormModule { }
