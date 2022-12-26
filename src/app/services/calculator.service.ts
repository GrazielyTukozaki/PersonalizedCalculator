import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }

  convertValue(measureInput: number, convertMeasureFrom: string, convertMeasureTo: string):number|null {

    //Temperature
    if(convertMeasureFrom == 'Celsius' && convertMeasureTo == 'Kelvin'){
      let result: number;
      result = measureInput + 273.15;
      return (result);
    }

    if(convertMeasureFrom == 'Kelvin' && convertMeasureTo == 'Celsius'){
      let result: number;
      result = measureInput - 273.15;
      return (result);
    }

    if(convertMeasureFrom == 'Celsius' && convertMeasureTo == 'Fahrenheit'){
      let result: number;
      result = (measureInput * 9/5)+32;
      return (result);
    }
    if(convertMeasureFrom == 'Fahrenheit' && convertMeasureTo == 'Celsius'){
      let result: number;
      result = (measureInput -32) * 5/9;
      return (result);
    }
    if(convertMeasureFrom == 'Fahrenheit' && convertMeasureTo == 'Kelvin'){
      let result: number;
      result = ((measureInput - 32) * 5/9) + 273.15;
      return (result);
    }
    if(convertMeasureFrom == 'Kelvin' && convertMeasureTo == 'Fahrenheit'){
      let result: number;
      result = ((measureInput - 273.15) * 9/5 ) + 32;
      return (result);
    }

    //Weight
    if(convertMeasureFrom == 'Grama' && convertMeasureTo == 'Libra'){
      let result: number;
      result = measureInput / 453.60;
      return (result);
    }
    if(convertMeasureFrom == 'Libra' && convertMeasureTo == 'Grama'){
      let result: number;
      result = measureInput * 453,60;
      return (result);
    }

    //Measure
    if(convertMeasureFrom == 'Metro' && convertMeasureTo == 'Polegadas'){
      let result: number;
      result = measureInput * 39.37;
      return (result);
    }
    if(convertMeasureFrom == 'Polegadas' && convertMeasureTo == 'Metro'){
      let result: number;
      result = measureInput / 39.37;
      return (result);
    }

    return (null);
  }
}
