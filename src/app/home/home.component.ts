import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  temperatures = ["Celsius", "Fahrenheit", "Kelvin"];
  weights = ["Grama", "Libra"];
  measures = ["Metro","Polegadas"];

  convertTempForm = new FormGroup({
    convertFromTemp: new FormControl('', Validators.required),
    convertToTemp: new FormControl('', Validators.required),
  });

  convertWeightForm = new FormGroup({
    convertFromWeight: new FormControl('', Validators.required),
    convertToWeight: new FormControl('', Validators.required),
  })

  convertMeasureForm = new FormGroup({
    convertFromMeasure: new FormControl('', Validators.required),
    convertToMeasure: new FormControl('', Validators.required),
  })

  constructor(
    private router: Router
      ) { }

  ngOnInit(): void {
    this.temperatures.sort();
    this.weights.sort();
    this.measures.sort();
  }

  onConvertTemp(){
    // Get the value of the selected temperature and send it as a parameter to the route
    this.router.navigate(['/calculadora',
    this.convertTempForm.value.convertFromTemp,
    this.convertTempForm.value.convertToTemp]
    );
  }
  onConvertWeight(){
    // Get the value of the selected weight and send it as a parameter to the route
    this.router.navigate(['/calculadora',
    this.convertWeightForm.value.convertFromWeight,
    this.convertWeightForm.value.convertToWeight]
    );
  }
  onConvertMeasure(){
    // Get the value of the selected measure and send it as a parameter to the route
    this.router.navigate(['/calculadora',
    this.convertMeasureForm.value.convertFromMeasure,
    this.convertMeasureForm.value.convertToMeasure]
    );
  }

}
