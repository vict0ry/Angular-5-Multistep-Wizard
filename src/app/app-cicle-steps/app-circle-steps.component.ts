import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {IWizzardState} from '../wizzard/wizzard.component';
import {StepComponent} from './step/step.component';
import {EnumStatus} from '../stepper/circle-step.component';

@Component({
  selector: 'app-circle-steps',
  templateUrl: './app-circle-steps.component.html',
  styleUrls: ['./app-circle-steps.component.less']
})
export class AppCircleStepsComponent {

  circleSteps: Array<IStep>;

  @Input() set circles(circles: IWizzardState | undefined) {
    if (circles && circles.steps) {
      this.circleSteps = [];
      circles.steps.forEach((step: StepComponent, index: number) => {
        const tempStep: IStep = {
          currentStep: circles.currentStep,
          stepNumber: index,
          status: 'DONE',
        };
        step.isValid ? tempStep.status = 'DONE' : tempStep.status = 'IN_PROGRESS';
        this.circleSteps.push(tempStep);
      });
    }
  }
}

export interface IStep {
  stepNumber: number;
  currentStep: number;
  status: EnumStatus;
}
