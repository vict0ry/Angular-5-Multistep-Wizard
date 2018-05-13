import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-circle-step',
  templateUrl: './circle-step.component.html',
  styleUrls: ['./circle-step.component.less']
})
export class CircleStepComponent implements OnInit {
  @Input() isLast: boolean = false;
  @Input() status: EnumStatus = 'IN_PROGRESS';
  @Input() currentStep: number = 0;
  @Input() stepNumber: number = 0;
  @Input() size: number = 80;

  circleSize: ICircleSize = {
    'height': `${this.size}px`,
    'width': `${this.size}px`,
  };

  getStatus(): string {
    switch (this.status) {
      case 'DONE':
        return 'done';
      case this.currentStep === this.stepNumber && 'IN_PROGRESS':
        return 'progress';
      case 'FINISHED':
        return 'done';
      default:
        return 'default';
    }
  }

  constructor() {
  }

  ngOnInit() {
  }

}

export type EnumStatus = 'DONE' | 'IN_PROGRESS' | 'FINISHED';

export interface ICircleSize {
  height: string;
  width: string;
}
