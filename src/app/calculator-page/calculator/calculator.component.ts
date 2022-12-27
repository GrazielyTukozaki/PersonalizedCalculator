import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Measure } from 'src/app/models/measure';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  measure = "Medida Padrão";
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

  onResultConversion(inputMeasure: number){
    this.resultConv = {
      type: this.measure,
      value: inputMeasure
    };
    this.resultConvChange.emit(this.resultConv);
  }

}
