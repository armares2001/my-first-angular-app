import { Component, Inject, OnInit } from '@angular/core';
import data from '../../data.json';

if (typeof data === 'object') data.myName = 'Piero';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title: string;
  name: string;

  constructor() {
    this.title = 'my-first-app';
    this.name = data.myName;
  }

  ngOnInit(): void {}

  success(): void {
    this.name = this.name + '0';
  }
}
