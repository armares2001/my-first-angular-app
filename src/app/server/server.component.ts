import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit, OnDestroy {
  private serverS: string;
  id: number;
  status: string;
  list: string[] = ['cane', 'gatto'];

  constructor() {
    this.serverS = '2';
    this.id = 10;
    this.status = 'offline';
  }
  ngOnDestroy(): void {
    try {
      console.log('destroy server');
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }

  ngOnInit(): void {
    try {
      console.log(this.serverS);
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
}
