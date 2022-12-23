import { TestBed } from '@angular/core/testing';
import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [CalculatorService] });
    service = TestBed.inject(CalculatorService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
