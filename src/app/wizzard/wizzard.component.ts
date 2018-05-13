import {
  AfterContentInit,
  Component,
  ContentChildren, EventEmitter, Input, Output,
  QueryList,
} from '@angular/core';
import {StepComponent} from '../app-cicle-steps/step/step.component';

@Component({
  selector: 'app-wizzard',
  templateUrl: './wizzard.component.html',
  styleUrls: ['./wizzard.component.less']
})
export class WizzardComponent implements AfterContentInit {
  @Output() isDone = new EventEmitter<boolean>();
  @Output() stepChange = new EventEmitter<IWizzardState>();

  @ContentChildren(StepComponent) stepsContentChildren: QueryList<StepComponent>;

  stepByClick: number = 0;
  isLast: boolean;

  ngAfterContentInit() {
    console.log(this.currentState());
    console.log('test');
    this.stepChange.emit(this.currentState());
    this.activateFirstStep();
    this.renderNextStep();
  }
  currentState(): IWizzardState {
    return {
      steps: this.stepsContentChildren,
      currentStep: this.stepByClick
    };
  }

  renderNextStep(): void {
    this.nextStep();
      this.stepChange.emit(this.currentState());
  }

  renderPrevStep(): void {
    this.prevStep();
      this.stepChange.emit(this.currentState());
  }

  activateFirstStep(): void {
    if (this.stepByClick === 0) {
      this.currComponent().isEnabled = true;
    }
  }

  currComponent(): StepComponent {
    const arrFromQueryList: Array<StepComponent> = this.stepsContentChildren.toArray();
    return arrFromQueryList[this.stepByClick];
  }
  isFormValid(): boolean {
    const formComponent = this.currComponent().formComponent;
    const form = this.currComponent().form;
    if (formComponent) {
      return formComponent.formGroup.valid;
    } else {
      return form.valid;
    }
  }

  nextStep(): void {
    if (this.isFormValid()) {
      this.currComponent().isValid = true;
      this.currComponent().isEnabled = false;
      // if not last step than increase current step value
      if (!this.isLastStep()) {
        this.stepByClick++;
        this.currComponent().isEnabled = true;
      }
    }
  }

  prevStep(): void {
    this.isLast = false;
    this.currComponent().isEnabled = false;
    this.stepByClick--;
    this.currComponent().isValid = false;
    this.currComponent().isEnabled = true;
  }

  isLastStep(): boolean {
    this.isLast = this.stepByClick + 1 === this.stepsContentChildren.length;
    if (this.isLast) {
      this.isDone.emit(true);
    }
    return this.isLast;
  }

}
export interface IWizzardState {
  steps: QueryList<StepComponent>;
  currentStep: number;
}
