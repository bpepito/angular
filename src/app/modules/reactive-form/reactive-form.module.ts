import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveListComponent } from './components/pages/reactive-list/reactive-list.component';
import { ReactiveFormRoutingModule } from './reactive-form-routing.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ReactiveListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormRoutingModule,
    ReactiveFormsModule
  ]
})
export class ReactiveFormModule { }
