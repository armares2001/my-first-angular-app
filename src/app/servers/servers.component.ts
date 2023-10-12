import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {
  #allowNewServer: boolean = false;
  #serverCreationStatus: string = 'no server was created';
  #serverName: string = 'ciao';
  #username: string;
  testt = 'nonono';
  servers = ['1', '2'];
  isVisible = false;
  clicks = [];

  constructor() {
    setTimeout(() => {
      console.log(this.#allowNewServer, this.allowNewServer);

      this.#allowNewServer = true;
    }, 2000);
  }
  log() {
    console.log(this.clicks);
  }

  onUpdateServerName(e: Event) {
    console.log(e, this.clicks);
    // let target = e.target as HTMLInputElement;
    // this.serverName = target.value;
    this.serverName = (<HTMLInputElement>e.target).value;
  }

  onCreateServer(e): void {
    console.log(e);
    this.serverCreationStatus =
      'Server was created! Name is ' + this.serverName;
    console.log(this.serverCreationStatus);
    console.log(this.testt);
  }

  getColor() {
    return 'red';
  }

  get allowNewServer(): boolean {
    return this.#allowNewServer;
  }

  get serverCreationStatus(): string {
    return this.#serverCreationStatus;
  }

  set serverCreationStatus(status: string) {
    this.#serverCreationStatus = status;
  }

  get serverName(): string {
    return this.#serverName;
  }

  set serverName(name: string) {
    console.log('ciao');
    this.#serverName = name;
  }

  get username(): string {
    return this.#username;
  }

  set username(username) {
    this.#username = username;
  }
}
