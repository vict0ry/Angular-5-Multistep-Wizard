import {
  Component,
  ContentChild,
  Input,
  OnInit, ViewChild,
} from '@angular/core';
import {FormGroup, NgForm} from '@angular/forms';
@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.less']
})
export class StepComponent implements OnInit {

  @Input() isValid: boolean = false;
  @Input() currentStep: number;
  @Input() form: NgForm;

  @ContentChild('formComponent') formComponent;

  isEnabled: boolean = false;

  ngOnInit() {
    this.currentStep = this.currentStep || 0;
  }

}
