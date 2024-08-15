import { Component } from '@angular/core';
import { Hero } from '../../../../../shared/models/hero';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-template-list',
  templateUrl: './template-list.component.html',
  styleUrl: './template-list.component.css'
})
export class TemplateListComponent {
  powers = ['Fly', 'Zap', 'Stick', 'Lazer Eyes', 'Frozen Breath'];
  model = new Hero(20, '', this.powers[1], 'Tony Stark');

  onSubmit = (form:NgForm) => {
    console.log(form);
  }
}
