import { Component } from '@angular/core'

@Component({
  selector: 'app-warning',
  template: `
    <h4>
      Warning!
    </h4>
  `,
  styles: [`
    h4 {
      background-color: red;
    }
  `]
})
export class WarningAlertComponent { }
