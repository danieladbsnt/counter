import { Component, OnInit } from '@angular/core';
import {timer} from 'rxjs';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {
source = timer (1000,1000);
subscription: any;
isStart!:boolean;
initValue = 0;
inputValue: number = 1;
  constructor() { }

  ngOnInit(): void {
  }

start() {
  console.log('start');
  this.isStart == true;
  if (this.inputValue === 1) {
    this.subscription = this.source.subscribe(val => val = this.initValue++)
  } else {
    this.subscription = this.source.subscribe(val => val = this.initValue += this.inputValue)
  }
}

pause() {
  console.log('pause');
  this.isStart == false;
  this.subscription.unsubscribe()
}

reset(){
  console.log('reset');
  this.initValue = 0;
}

countUp() {
  this.initValue++
}

countDown() {
  this.initValue--
}
}