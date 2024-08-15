import { Component } from '@angular/core';

@Component({
  selector: 'app-pipelist',
  templateUrl: './pipelist.component.html',
  styleUrl: './pipelist.component.css'
})
export class PipelistComponent {
  date1 = new Date();
  myString = 'Jack Hunter';
  amount = 123.5678;
  percent = 0.234;
  toRaise = 5;
}
