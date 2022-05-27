import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diet-routine',
  templateUrl: './diet-routine.component.html',
  styleUrls: ['./diet-routine.component.scss']
})
export class DietRoutineComponent implements OnInit {

  inputCalories: number = 0;
  maxCalories: number = 1500;
  overCalories: number = 0;
  sportName: string = "";
  sportDurationMinutes: number = 0;
  suggestion: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    
    this.suggestion = ""

    this.overCalories = this.inputCalories - this.maxCalories;
    this.sportDurationMinutes = this.overCalories / 10;
    
    if(this.overCalories <= 0) {
      this.suggestion = "Konsumsi Kalori Anda sudah tepat";
      return;
    } else if (this.overCalories <= 200) {
      this.sportName = "Berenang";
    } else if (this.overCalories <= 450) {
      this.sportName = "Bersepeda";
    } else if (this.overCalories <= 800) {
      this.sportName = "Lari";
    }

    this.suggestion = `Anda disarankan untuk ${this.sportName} selama ${this.sportDurationMinutes} menit`
    
  }

}
