import { Component, OnInit } from '@angular/core';
import { Router } from'@angular/router';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  currentStep: number = 1;
  inputFirstNumber: number = 0;
  inputOperation: number = 1;
  inputSecondNumber: number = 0;
  mathSign : string = "";
  resultNumber: number = 0;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  submit(step: number) {

    if(step === 2) {
      if(this.inputOperation < 1 || this.inputOperation > 4) {
        alert("Mohon masukkan pilihan yang valid");
        return;
      }
    }

    if(step === 3) {
      switch(this.inputOperation) {
        case 1:
          this.mathSign = '+';
          this.resultNumber = this.inputFirstNumber + this.inputSecondNumber;
          break;
        case 2:
          this.mathSign = '-';
          this.resultNumber = this.inputFirstNumber - this.inputSecondNumber;
          break;
        case 3:
          this.mathSign = '*';
          this.resultNumber = this.inputFirstNumber * this.inputSecondNumber;
          break;
        case 4:
          this.mathSign = "/";
          this.resultNumber = this.inputFirstNumber / this.inputSecondNumber;
          break;
      }
    }

    if(step === 4) {
      this.router.navigateByUrl('/', {skipLocationChange: true})
        .then(() => this.router.navigate(['/calculator']));
      return;
    }
    
    this.currentStep += 1;
  }

}
