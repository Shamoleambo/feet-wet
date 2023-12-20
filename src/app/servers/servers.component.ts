import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer: boolean = false
  newServerStatus: string = 'No Server Created'
  serverName: string = 'Test Server'
  serverCreated: boolean = false

  constructor () {
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000)
  }

  createNewServer (): void {
    this.newServerStatus = 'Server Created! ' + this.serverName
    this.serverCreated = true
  }

  onUpdateServerName (event): any {
    this.serverName = event.target.value
  }
}
