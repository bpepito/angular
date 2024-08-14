import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Blog } from '../../../models/blog';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrl: './blog-item.component.css'
})
export class BlogItemComponent {
  @Input(`blogInput`) blog:Blog | undefined;
  @Output() actionEmitter = new EventEmitter<Blog>();
  
  sendAction = () => {
    this.actionEmitter.emit(this.blog);
  }
}
