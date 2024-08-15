import { createInjectableType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AntiHero } from '../../../models/anti-hero';
import { checkHasNumberValidator } from '../../../validators/custom-validator';

@Component({
  selector: 'app-reactive-list',
  templateUrl: './reactive-list.component.html',
  styleUrl: './reactive-list.component.css'
})
export class ReactiveListComponent implements OnInit {
  antiHeroForm: FormGroup;
  powerFormArray: FormArray;
  constructor(private fb: FormBuilder) {
    this.antiHeroForm = this.fb.group({
      firstName: [
        'Bruce',
        [Validators.required, Validators.email, checkHasNumberValidator()],
      ],
      lastName: [''],
      knownAs: ['Batman', [Validators.minLength(2), Validators.maxLength(7)]],
      address: this.fb.group({
        bldgNo: 125,
        street: [''],
        city: '',
        country: ['Philippines'],
      }),
      powers: this.fb.array(['Fly', new FormControl('Zap'), 'Stick']),
    });
    this.powerFormArray = this.antiHeroForm.controls['powers'] as FormArray;
  }

  ngOnInit(): void {
    // this.antiHeroForm.valueChanges.subscribe((data) => {
    //   console.log(data);
    // });
  }

  onSubmit = () => {
    // console.log('form', this.antiHeroForm);
    // console.log('form', this.antiHeroForm.value);
    const antiHero: AntiHero = this.antiHeroForm.getRawValue() as AntiHero;

    console.log('form', this.antiHeroForm.getRawValue());

    console.log(this.firstName.errors);
  };

  addPower = () => {
    this.powerFormArray.controls.push(new FormControl(''));
  };

  deletePower = (index: number) => {
    this.powerFormArray.removeAt(index);
  };

  clear = () => {
    this.antiHeroForm.reset();
    // this.antiHeroForm.get('firstName')?.reset();
    // this.antiHeroForm.get('lastName')?.reset();
  };

  changeState = () => {
    this.antiHeroForm.get('firstName')?.setErrors({ incorrect: true });
    this.antiHeroForm.get('knownAs')?.disable();
    this.antiHeroForm.addControl('otherControl', new FormControl(''));
  };

  get firstName() {
    return this.antiHeroForm.get('firstName') as FormControl;
  }
}