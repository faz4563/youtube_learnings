import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

 
  dataList: Array<{ id: number; shape: string  }> = [
    { id: 1, shape: 'circle'  },
    { id: 2, shape: 'square'  },
    { id: 3, shape: 'rectangle'  },
    { id: 4, shape: 'triangle'  },
  ];
  colorList: Array<{ id: number; color: string }> = [
    { id: 1, color: 'red' },
    { id: 2, color: 'blue' },
    { id: 3, color: 'green' },
    { id: 4, color: 'yellow' },
  ];


  // public getShapes(shapes: string): string {
  //   switch (shapes) {
  //     case 'circle':
  //       return 'circle';
  //     case 'square':
  //       return 'square';
  //     case 'rectangle':
  //       return 'rectangle';
  //     case 'triangle':
  //       return 'triangle';

  //     default:
  //       return '';
  //   }
  // }

  // public getColors(color: string): string {
  //   switch (color) {
  //     case 'red':
  //       return 'red';
  //     case 'blue':
  //       return 'blue';
  //     case 'green':
  //       return 'green';
  //     case 'yellow':
  //       return 'yellow';

  //     default:
  //       return this.selectedColor;
  //   }
  // }


  selectedShape: string = '';
  selectedColor: string = '';

  setShapes(shape: any) {
    this.selectedShape = shape.target.value;
    console.log(this.selectedShape);
  }
  changeColor(color: any) {
    this.selectedColor = color.target.value;
    console.log(this.selectedShape);
  }
}
