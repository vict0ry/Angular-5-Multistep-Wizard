import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {CircleStepComponent} from './stepper/circle-step.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { StepComponent } from './app-cicle-steps/step/step.component';
import { WizzardComponent } from './wizzard/wizzard.component';
import { TestComponent } from './forms/test/test.component';
import { Test1Component } from './forms/test1/test1.component';
import {AppCircleStepsComponent} from './app-cicle-steps/app-circle-steps.component';


@NgModule({
  declarations: [
    AppComponent,
    CircleStepComponent,
    StepComponent,
    WizzardComponent,
    TestComponent,
    Test1Component,
    AppCircleStepsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
