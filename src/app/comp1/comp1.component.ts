import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-comp1',
  imports: [CommonModule, FormsModule],
  templateUrl: './comp1.component.html',
  styleUrl: './comp1.component.css',
})
export class Comp1Component {
  // @Input()
  // productsFromParent: Array<{
  //   id: number;
  //   name: string;
  //   price: number;
  //   inStock: boolean;
  //   category: string;
  // }> = [];

  // @Output()
  // dataToParent = new EventEmitter();

  // sendDataToParent(e: any, data: any) {
  //   this.dataToParent.emit(data);
  //   console.log(data);
  // }

 

}
