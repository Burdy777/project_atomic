import { Component, OnInit, Input,
  Output, EventEmitter, OnChanges, SimpleChanges
} from '@angular/core';

@Component({
selector: 'app-number',
templateUrl: './number.component.html',
styleUrls: ['./number.component.css']
})
export class NumberComponent implements OnInit, OnChanges {
// tslint:disable-next-line:no-input-rename
@Input('srcText') text: string;

// tslint:disable-next-line:no-input-rename
@Input('size') newSize: number;

@Output() size: EventEmitter<any> = new EventEmitter();

constructor() { }

ngOnInit() {}

ngOnChanges(changes: SimpleChanges) {
this.newSize = changes.newSize.currentValue;
}

decrease() {
this.size.emit(false);
}

increase() {
this.size.emit(true);
}

}
