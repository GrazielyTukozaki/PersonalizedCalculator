import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import {MatSelectHarness} from '@angular/material/select/testing';
import {HarnessLoader} from '@angular/cdk/testing';
import {MatSelectModule} from '@angular/material/select';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { HomeComponent } from './home.component';
import {AppModule} from '../app.module';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';


describe('Home Component', () => {
  let fixture: ComponentFixture<HomeComponent>;
  let loader: HarnessLoader;
  let router: Router;
  let component: HomeComponent;
  let route: ActivatedRoute;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatSelectModule, NoopAnimationsModule, AppModule, RouterTestingModule.withRoutes([])],
      declarations: [HomeComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    loader = TestbedHarnessEnvironment.loader(fixture);
    router = TestBed.inject(Router);
    route = TestBed.inject(ActivatedRoute);
  });

  it('should create the Home Component', () => {
    const home = fixture.componentInstance;
    expect(home).toBeTruthy();
  });

  it('should load all select components at home', async () => {
    const selects = await loader.getAllHarnesses(MatSelectHarness);
    expect(selects.length).toBe(6);
  });

  it('should be able to open and close a select', async () => {
    const select = await loader.getHarness(MatSelectHarness);

    expect(await select.isOpen()).toBe(false);

    await select.open();
    expect(await select.isOpen()).toBe(true);

    await select.close();
    expect(await select.isOpen()).toBe(true);
  });

  it('should be able to get the value "celsius" from the select', async () => {
    const select = await loader.getHarness(MatSelectHarness);
    await select.open();
    const options = await select.getOptions();

    await options[0].click();

    expect(await select.getValueText()).toBe('Celsius');
  });

  it('should be able to get the value "Fahrenheit" from the select', async () => {
    const select = await loader.getHarness(MatSelectHarness);
    await select.open();
    const options = await select.getOptions();

    await options[1].click();

    expect(await select.getValueText()).toBe('Fahrenheit');
  });

  it('should be able to get the value "Kelvin" from the select', async () => {
    const select = await loader.getHarness(MatSelectHarness);
    await select.open();
    const options = await select.getOptions();

    await options[2].click();

    expect(await select.getValueText()).toBe('Kelvin');
  });

it('should call route /calculadora', fakeAsync(() => {
  const spy = spyOn(router, 'navigate');
  component.onConvertTemperature();
  tick();
  //navigate to route /calculadora
  expect(spy.calls.first().args[0]).toContain('/calculadora');


}));

it('should call route params', fakeAsync(() => {

  const spyRoute = spyOn(route.snapshot.paramMap, 'get');
  tick();
  //test router parameters
  spyRoute.and.returnValue('Celsius');
  expect(component.temperatures[0]).toBe('Celsius');

  spyRoute.and.returnValue('Fahrenheit');
  expect(component.temperatures[1]).toBe('Fahrenheit');

  spyRoute.and.returnValue('Kelvin');
  expect(component.temperatures[2]).toBe('Kelvin');

}));


});
