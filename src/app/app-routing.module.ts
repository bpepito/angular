import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pipedemo',
    pathMatch: 'full', 
  },
  {
    path: 'blog',
    loadChildren: () => import('./modules/blog/blog.module').then(m => m.BlogModule)
  },
  {
    path: 'pipedemo',
    loadChildren: () => import('./modules/pipedemo/pipedemo.module').then(m => m.PipedemoModule)
  },
  {
    path: 'template-form',
    loadChildren: () => import('./modules/template-form/template-form.module').then(m => m.TemplateFormModule)
  },
  {
    path: 'reactive-form',
    loadChildren: () => import('./modules/reactive-form/reactive-form.module').then(m => m.ReactiveFormModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
