import {Component, OnInit} from '@angular/core';
import {IWizzardState} from './wizzard/wizzard.component';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  showMessage: boolean = false;
  circles: IWizzardState;
  formGroup: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.formGroup = this.fb.group({
      phone: ['', Validators.required],
      email: ['youremail', Validators.required]
    });
  }
  stepChange($event: IWizzardState): void {
    this.circles = $event;
  }
  registrationComplete($event): void {
    if ($event) {
      this.showMessage = $event;
    }
  }
}
