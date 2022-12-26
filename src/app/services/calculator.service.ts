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
      result.toFixed(2);
      return (+result.toFixed(2));
    }

    if(convertMeasureFrom == 'Kelvin' && convertMeasureTo == 'Celsius'){
      let result: number;
      result = measureInput - 273.15;
      result.toFixed(2);
      return (+result.toFixed(2));
    }

    if(convertMeasureFrom == 'Celsius' && convertMeasureTo == 'Fahrenheit'){
      let result: number;
      result = (measureInput * 9/5)+32;
      result.toFixed(2);
      return (+result.toFixed(2));
    }
    if(convertMeasureFrom == 'Fahrenheit' && convertMeasureTo == 'Celsius'){
      let result: number;
      result = (measureInput - 32) * 5/9;
      result.toFixed(2);
      console.log(typeof result);
      console.log(typeof (result.toFixed(2)));

      return (+result.toFixed(2));
    }
    if(convertMeasureFrom == 'Fahrenheit' && convertMeasureTo == 'Kelvin'){
      let result: number;
      result = ((measureInput - 32) * 5/9) + 273.15;
      return (+result.toFixed(2));
    }
    if(convertMeasureFrom == 'Kelvin' && convertMeasureTo == 'Fahrenheit'){
      let result: number;
      result = ((measureInput - 273.15) * 9/5 ) + 32;
      return (+result.toFixed(2));
    }

    //Weight
    if(convertMeasureFrom == 'Grama' && convertMeasureTo == 'Libra'){
      let result: number;
      result = measureInput / 453.60;
      return (+result.toFixed(2));
    }
    if(convertMeasureFrom == 'Libra' && convertMeasureTo == 'Grama'){
      let result: number;
      result = measureInput * 453,60;
      return (+result.toFixed(2));
    }

    //Measure
    if(convertMeasureFrom == 'Metro' && convertMeasureTo == 'Polegadas'){
      let result: number;
      result = measureInput * 39.37;
      return (+result.toFixed(2));
    }
    if(convertMeasureFrom == 'Polegadas' && convertMeasureTo == 'Metro'){
      let result: number;
      result = measureInput / 39.37;
      return (+result.toFixed(2));
    }

    return (null);
  }
}
