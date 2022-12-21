import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Measure } from '../models/measure';
import { CalculatorService } from '../services/calculator.service';

@Component({
  selector: 'app-calculator-page',
  templateUrl: './calculator-page.component.html',
  styleUrls: ['./calculator-page.component.scss']
})
export class CalculatorPageComponent implements OnInit {
  measure1 = "";
  measure2 = "";
  id1!: string | null;
  id2!: string | null;
  result1: Measure = {type: '', value: 0};
  result2: Measure = {type: '', value: 0};


  constructor(private route: ActivatedRoute, private calculatorService: CalculatorService) {
   }

  ngOnInit() {
    this.id1 = this.route.snapshot.paramMap.get('id1')
    this.id2 = this.route.snapshot.paramMap.get('id2')
    if(!!this.id1 && !!this.id2){
      this.result1.type = this.id1
      this.result2.type = this.id2
    }
  }

  ngOnChanges() {

  }
  convertedValue(measureInput: Measure){
    if(measureInput.type == this.result1.type){
      const answer = this.calculatorService.convertValues(measureInput.value, this.result1.type, this.result2.type);
      if (answer != null){
        this.result2 = {
          type:this.result2.type,
          value: answer
        };
      }
    }
    else if (measureInput.type == this.result2.type){
      const answer = this.calculatorService.convertValues(measureInput.value, this.result2.type, this.result1.type);
      if (answer != null){
        this.result1 = {
          type:this.result1.type,
          value: answer
        };
      }
    }
  }

}
