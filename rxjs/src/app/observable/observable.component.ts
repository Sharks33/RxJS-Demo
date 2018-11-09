import { Component } from '@angular/core';
import { Observable, Observer, from } from 'rxjs';

let arr = [1, 2, 4];
let source = from(arr);

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})

export class ObservableComponent implements Observer<number> {

  next(value) {
    console.log(`value: ${value}`);
  }

  error(e) {
    console.log(`error: ${e}`);
  }

  complete() {
    console.log("complete");
  }

  constructor() { }

}

source.subscribe(new ObservableComponent());
