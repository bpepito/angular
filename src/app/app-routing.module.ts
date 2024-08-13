import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { BookComponent } from './book/book.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'blog',
    pathMatch: 'prefix',
},
{
    path: 'blog',
    component: BlogComponent,
},
{
    path: 'book',
    component: BookComponent,
},
{
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
