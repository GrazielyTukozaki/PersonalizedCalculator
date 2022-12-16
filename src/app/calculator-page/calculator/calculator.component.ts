import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Measure } from 'src/app/models/measure';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  measure = "";
  inputValue!:number;
  @Input() resultConv!: Measure;

  formMeasure = new FormGroup({
    inputMeasure: new FormControl('')
  })

  @Output() resultConvChange = new EventEmitter<Measure>();

  constructor() { }

  ngOnInit(): void {
    this.measure = this.resultConv.type
    this.inputValue = this.resultConv.value;
  }

  onResultConversion(measureInput: number){
    this.resultConv = {
      type: this.measure,
      value: measureInput
    };
    this.resultConvChange.emit(this.resultConv);
  }

}
