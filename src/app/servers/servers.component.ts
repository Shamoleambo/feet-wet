import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer: boolean = false
  newServerStatus: string = 'No Server Created'

  constructor () {
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000)
  }

  createNewServer(): void {
    this.newServerStatus = 'Server Created!'
  }

}
