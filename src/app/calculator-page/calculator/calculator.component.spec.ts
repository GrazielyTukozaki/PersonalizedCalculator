import { DebugElement } from "@angular/core";
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { AppModule } from "src/app/app.module";
import { CalculatorComponent } from "./calculator.component";

describe('Calculator Component', () => {

  let fixture: ComponentFixture<CalculatorComponent>;
  let component:CalculatorComponent;

   beforeEach(waitForAsync(() => {

    TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [CalculatorComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
  }));


  it("should create the component", () => {

    expect(component).toBeTruthy();

  });

   it("should call onResultConversion", () => {

    const onResultConversionSpy = spyOn(component, "onResultConversion");

    component.onResultConversion(10);

    expect(onResultConversionSpy).toHaveBeenCalledTimes(1);

    const result = component.resultConv = {
      type: "Kelvin",
      value: 10
    };

    expect(result.type).toBe("Kelvin");
    expect(result.value).toBe(10);

  });

});


