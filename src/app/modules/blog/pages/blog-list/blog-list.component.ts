import { Component } from '@angular/core';
import { Blog } from '../../../models/blog';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css'
})
export class BlogListComponent {
  isCard = false;
  width = '150px';
  height = '350px';
  color = 'red';
  num = 0;
  numArrayIndex = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven'];
  numArray = [0, 1, 2, 3, 4, 5, 6, 7];
  blogs:Blog[] = [
    {
      title: 'Blog1',
      description: 'My Blog1',
      published: false,
      authorActive: true,
    },
    {
      title: 'Blog2',
      description: 'My Blog2',
      published: true,
      authorActive: false,
    },
    {
      title: 'Blog3',
      description: 'My Blog3',
      published: true,
      authorActive: true,
    },
  ];

  executeAction = (blog:Blog, index:number) => {
    console.log("Printing from parent: " + blog.description + ' with index: ' + index)
  }

  incrementNumber = () => {
    this.num++;
  }

  changeCss = () => {
    this.width = '200px';
    this.height = '200px';
    this.color = 'dodgerblue';
  }

  toggleClass = () => {
    this.isCard = !this.isCard;
  }
}
