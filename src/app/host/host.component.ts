import { AfterRenderRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
})
export class HostComponent implements OnInit, AfterRenderRef {
  destroy(): void {
    try {
      console.log('destroy');
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  ngOnInit(): void {
    try {
      console.log('HOST');
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  test(): void {
    try {
      console.log('test');
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
}
