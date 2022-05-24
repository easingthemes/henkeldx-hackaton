import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

type ProductQuantityComponentThemeVariant = 'default' | 'outline'
@Component({
  selector: 'raqn-product-quantity',
  templateUrl: './productQuantity.component.html',
  styleUrls: ['./productQuantity.component.scss']
})
export class ProductQuantityComponent implements OnInit {

  @Input() theme: ProductQuantityComponentThemeVariant = 'default'
  @Input() counterProp: number = 1
  @Input() withRemove: boolean = false
  @Input() removeOnly: boolean = false
  @Output() updateCounterValue: EventEmitter<number> = new EventEmitter();

  counter: number = this.counterProp || 1

  add(): void {
    this.counter = this.counter + 1
    this.updateCounterValue.emit(this.counter)
  }

  subtract(): void {
    this.counter = this.counter - 1
    this.updateCounterValue.emit(this.counter)
  }

  remove(): void {
    this.counter = 0
    this.updateCounterValue.emit(this.counter)
  }

  constructor() {}

  ngOnInit(): void {}

}
