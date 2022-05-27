import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-courier',
  templateUrl: './courier.component.html',
  styleUrls: ['./courier.component.scss']
})

export class CourierComponent implements OnInit {
  counterForm: any;
  sumDistance: number = 0;
  sumFuel: number = 0;
  currentStep: number = 1;
  
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.counterForm = this.fb.group({
      counters: this.fb.array([])
    });

    this.addCounter()
  }

  counters(): FormArray {
    return this.counterForm.get('counters') as FormArray;
  }

  newCounter(): FormGroup {
    return this.fb.group({
      countResto: '',
      restos: this.fb.array([])
    });
  }

  removeCounter(counterIndex: number) {
    this.counters().removeAt(counterIndex);
  }

  counterRestos(counterIndex: number): FormArray {
    return this.counters()
      .at(counterIndex)
      .get('restos') as FormArray;
  }

  newResto(): FormGroup {
    return this.fb.group({
      distance: ''
    });
  }

  addCounter() {
    this.counters().push(this.newCounter());
  }

  submitStep1() {

    const totalResto = this.counterForm.value.counters[0].countResto;

    if(totalResto < 1) {
      alert('Mohon masukkan nilai berupa angka, minimal 1');
      return;
    }

    const counterIndex = 0;

    for(let i = 0; i < totalResto; i++) {
      this.addCounterResto(counterIndex);
    }

    this.currentStep += 1;
  }

  addCounterResto(counterIndex: number) {
    this.counterRestos(counterIndex).push(this.newResto());
  }

  removeCounterResto(counterIndex: number, restoIndex: number) {
    this.counterRestos(counterIndex).removeAt(restoIndex);
  }

  submitStep2() {

    const distanceData = this.counterForm.value.counters[0].restos;

    const sum = distanceData.reduce((accumulator: number, object: any) => {
      return accumulator + parseFloat(object.distance);
    }, 0);

    this.sumDistance = sum;
    this.sumFuel = sum / 2.5;
  }
}