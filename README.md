Angular 5 Multistep, you can pass component with form or directly write your form between step tags. 

## HOW TO RUN IT: 

1) download dependencies:
```bash
$ npm install
```
2) run it on http://localhost:4200
```bash
$ ng serve
```


Usage example :

```xml
<app-wizzard (isDone)="registrationComplete($event)" (stepChange)="stepChange($event)">

  <app-step>
    <!-- PUT YOUR FORM HERE WITH REFERENCE #formComponent-->
    <app-test #formComponent></app-test>
  </app-step>

  <app-step>
    <app-test1 #formComponent></app-test1>
  </app-step>

  <app-step [form]="myForm">
    <form #myForm="ngForm" class="test-form" [formGroup]="formGroup">
      <label for="phone">Phone:</label>
      <input id="phone" formControlName="phone" type="text">
      <label for="email">Email:</label>
      <input id="email" formControlName="email" type="text">
    </form>
  </app-step>

</app-wizzard>
```
## Using: 
if you would like to use form as component : 
1) create formGroup: FormGroup in your component, 
2) use #formComponent reference in your form. (check example above)

If you're using form directly inside <app-step> send your ngForm reference as a parameter to <app-step> (check example above)

