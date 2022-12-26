import { TestBed } from '@angular/core/testing';
import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let calculatorService: CalculatorService;
  let calculatorServiceSpy: any;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [CalculatorService] });
    calculatorService = TestBed.inject(CalculatorService);
    calculatorServiceSpy = spyOn(calculatorService, 'convertValue').and.callThrough();
  });

  it('can load instance', () => {
    expect(calculatorService).toBeTruthy();
  });

  it('should convert Celcius to Kelvin', ()=> {
    const result = calculatorService.convertValue(10, "Celsius", "Kelvin");
    expect(result).toBe(283.15);
    expect(calculatorServiceSpy).toHaveBeenCalledTimes(1);
  });

  it('should convert Kelvin to Celcius', ()=> {
    const result = calculatorService.convertValue(10, "Kelvin", "Celsius");
    expect(result).toBe(-263.15);
    expect(calculatorServiceSpy).toHaveBeenCalledTimes(1);
  });

  it('should convert Celcius to Fahrenheit', ()=> {
    const result = calculatorService.convertValue(10, "Celsius", "Fahrenheit");
    expect(result).toBe(50);
    expect(calculatorServiceSpy).toHaveBeenCalledTimes(1);
  });

  it('should convert Fahrenheit to Celcius', ()=> {
    const result = calculatorService.convertValue(10, "Fahrenheit", "Celsius");
    expect(result).toBe(-12.22);
    expect(calculatorServiceSpy).toHaveBeenCalledTimes(1);
  });


  it('should convert Kelvin to Fahrenheit', ()=> {
    const result = calculatorService.convertValue(10, "Kelvin", "Fahrenheit");
    expect(result).toBe(-441.67);
    expect(calculatorServiceSpy).toHaveBeenCalledTimes(1);
  });

  it('should convert Fahrenheit to Kelvin', ()=> {
    const result = calculatorService.convertValue(10, "Fahrenheit", "Kelvin");
    expect(result).toBe(260.93);
    expect(calculatorServiceSpy).toHaveBeenCalledTimes(1);
  });

  it('should convert Grama to Libra', ()=> {
    const result = calculatorService.convertValue(10, "Grama", "Libra");
    expect(result).toBe(0.02);
    expect(calculatorServiceSpy).toHaveBeenCalledTimes(1);
  });

  it('should convert Libra to Grama', ()=> {
    const result = calculatorService.convertValue(10, "Libra", "Grama");
    expect(result).toBe(4530);
    expect(calculatorServiceSpy).toHaveBeenCalledTimes(1);
  });

  it('should convert Metro to Polegadas', ()=> {
    const result = calculatorService.convertValue(10, "Metro", "Polegadas");
    expect(result).toBe(393.7);
    expect(calculatorServiceSpy).toHaveBeenCalledTimes(1);
  });

  it('should convert Polegadas to Metro', ()=> {
    const result = calculatorService.convertValue(10, "Polegadas", "Metro");
    expect(result).toBe(0.25);
    expect(calculatorServiceSpy).toHaveBeenCalledTimes(1);
  });

  it('should return null', ()=> {
    const result = calculatorService.convertValue(10, "", "Metro");
    expect(result).toBe(null);
    expect(calculatorServiceSpy).toHaveBeenCalledTimes(1);
  });

});

