import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PipelistComponent } from './pages/pipelist/pipelist.component';
import { ExponentialPipe } from '../../shared/pipes/exponential.pipe';

const route : Routes = [
  {
    path: '',
    component: PipelistComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]
})
export class PipedemoRoutingModule { }
