import { Component } from '@angular/core'

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  serverID: number = 10
  serverStatus: string = 'offline'

  constructor () {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'
  }

  getColor (): string {
    return this.serverStatus === 'online' ? 'blue' : 'yellow';
  }

  getServerStatus (): string {
    return this.serverStatus
  }
}
