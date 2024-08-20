import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserItemComponent } from './user-item/user-item.component';
import { UserComponent } from './user.component';



@NgModule({
  declarations: [
    UserItemComponent,
    UserComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [UserComponent]
})
export class UserModule { }
