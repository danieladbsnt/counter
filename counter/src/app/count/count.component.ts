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
value = 1;
  constructor() { }

  ngOnInit(): void {
  }

start() {
  console.log('start');
  this.isStart == true;
  this.subscription = this.source.subscribe(val => val = this.value++)
  
}

pause() {
  console.log('pause');
  this.isStart == false;
  this.subscription.unsubscribe()
}

reset(){
  console.log('reset');
  this.value = 0;
}

countUp() {
  this.value++
}

countDown() {
  this.value--
}
}

/*
https://www.learnrxjs.io/learn-rxjs/operators/creation/timer
https://www.learnrxjs.io/learn-rxjs/operators/transformation/map

 */