import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [CommonModule, FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css',
})
export class DataBindingComponent {
  // firstProperty = 'Data 1';
  // isDisabled: boolean = false;

  // checkValid(event: any) {
  //   let inputData = event.target.value.trim().toLowerCase();
  //   if (inputData.includes('fazil')) {
  //     this.isDisabled = true;
  //   } else {
  //     this.isDisabled = false;
  //   }
  // }
  // consoles() {
  //   console.log(
  //     'qwertyui',
  //     Object.keys({
  //       key1: 'data1',
  //       key2: 'data2',
  //       key3: 'data3',
  //       key4: 'data4',
  //       key5: 'data5',
  //       key6: 'data6',
  //     })
  //   );
  // }

  // numbersArray: number[] = Array.from({ length: 50 }, (_, i) => i + 1);

  // selectedNumber: number = 0;
  source: Array<{
    id: number;
    name: string;
    price: number;
    inStock: boolean;
    category: string;
  }> = [];

  products: Array<{
    id: number;
    name: string;
    price: number;
    inStock: boolean;
    category: string;
  }> = []

  generateProducts = () => {
    let productCategories: Record<string, string[]> = {
      Electronics: [
        'Laptop',
        'Smartphone',
        'Headphones',
        'Keyboard',
        'Mouse',
        'Monitor',
        'Tablet',
        'Speaker',
        'Printer',
        'Charger',
        'Camera',
        'Microphone',
        'Graphics Card',
        'SSD',
        'Hard Drive',
        'Router',
        'Smartwatch',
        'Game Console',
        'VR Headset',
        'Projector',
      ],
      Clothing: [
        'T-Shirt',
        'Jeans',
        'Jacket',
        'Sneakers',
        'Socks',
        'Hat',
        'Gloves',
        'Scarf',
        'Dress',
        'Shorts',
      ],
      Food: [
        'Apple',
        'Banana',
        'Bread',
        'Milk',
        'Cheese',
        'Eggs',
        'Chicken',
        'Rice',
        'Pasta',
        'Vegetables',
      ],
    };

    let productNames = Object.values(productCategories).flat();

    return Array.from({ length: 500 }, (_, i) => {
      let name = productNames[Math.floor(Math.random() * productNames.length)];
      let category = Object.keys(productCategories).find((category) =>
        productCategories[category].includes(name)
      ) || 'Unknown';

      return {
        id: i + 1,
        name: name + ' ' + (i + 1),
        category: category,
        price: Math.floor(Math.random() * 2000) + 5,
        inStock: Math.random() > 0.3, // 70% chance of being in stock
      };
    });
  };

  ngOnInit() {
    this.source = this.generateProducts();
    this.products = this.source;
  }

  filterProductData(type: any) {
    this.products = []
    this.products = this.source.filter(items => items.category === type);
  }


}
