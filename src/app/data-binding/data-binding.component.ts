import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-data-binding',
  imports: [CommonModule, FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  firstProperty = "Data 1"
  isDisabled: boolean = false;

  checkValid(event: any) {
    let inputData = event.target.value.trim().toLowerCase();
    if (inputData.includes('fazil')) {
      this.isDisabled = true;
    } else {
      this.isDisabled = false;
    }

  }
  consoles() {
    console.log('qwertyui', Object.keys({
      "key1": "data1",
      "key2": "data2",
      "key3": "data3",
      "key4": "data4",
      "key5": "data5",
      "key6": "data6",

    }))
  }
}
