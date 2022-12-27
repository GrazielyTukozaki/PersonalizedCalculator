import { DebugElement } from "@angular/core";
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { AppModule } from "../app.module";
import { Measure } from "../models/measure";
import { CalculatorService } from "../services/calculator.service";
import { CalculatorPageComponent } from "./calculator-page.component";


describe('Calculator Page', () => {

  let fixture: ComponentFixture<CalculatorPageComponent>;
  let component:CalculatorPageComponent;
  let element: any;
  let de: DebugElement;
  let calculatorService: any;
  let route: ActivatedRoute;

  beforeEach(waitForAsync(() => {

    const calculatorServiceSpy = jasmine.createSpyObj('CalculatorService',['convertValue'])

    TestBed.configureTestingModule({
      imports: [
        AppModule, RouterTestingModule.withRoutes([])
        ],
        providers: [
          { provide: CalculatorService, useValue: calculatorServiceSpy } //mocking the CalculatorService
        ]
    }).compileComponents()
        .then(() => {
          fixture = TestBed.createComponent(CalculatorPageComponent);
          component = fixture.componentInstance;
          de = fixture.debugElement;
          element = fixture.nativeElement;
          calculatorService = TestBed.inject(CalculatorService);
          route = TestBed.inject(ActivatedRoute);
        });
  }));

  it("should create the component", () => {

    expect(component).toBeTruthy();

  });

  it("should render 'Você está vendo a conversão de Kelvin e Celcius'", () => {
    component.result1.type = 'Kelvin';
    component.result2.type = 'Celcius';

    fixture.detectChanges();

    expect(element.querySelector('h1').innerText).toBe('Você está vendo a conversão de Kelvin e Celcius');
    expect(de.query(By.css('h1')).nativeElement.innerText).toBe('Você está vendo a conversão de Kelvin e Celcius');
  });

  it("should call onConvertValue", () => {

    const onConvertValueSpy = spyOn(component, "onConvertValue");

    const testMeasure: Measure = {
      type: "Kelvin",
      value: 10
    }

    component.onConvertValue(testMeasure);

    expect(onConvertValueSpy).toHaveBeenCalled();

  });

  it('should call route params Kelvin and Celcius', () => {
    fixture.detectChanges(); //Simulates ngOnInit()

    component.id1 = 'Kelvin';
    component.id2 = 'Celcius';

    fixture.detectChanges();

    const spyRoute = spyOn(route.snapshot.paramMap, 'get');
    //test router parameters - Kelvin
    spyRoute.and.returnValue('Kelvin');
    expect(component.id1).toBe('Kelvin');

    //test router parameters - Celcius
    spyRoute.and.returnValue('Celcius');
    expect(component.id2).toBe('Celcius');

  });

});
