import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  TemplateRef,
  viewChild,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-data-binding',
  imports: [CommonModule, FormsModule],
  templateUrl: './data-binding.component.html',
  template: '',
  styleUrl: './data-binding.component.css',
})
export class DataBindingComponent {
  // selectedShape: string = '';
  // selectedColor: string = '';
  // shapesList: Array<{ id: number; shape: string }> = [];
  // colorsList: Array<{ id: number; color: string }> = [];

  // constructor(private commonService: CommonService) {}

  // ngOnInit() {
  //   this.shapesList = this.commonService.dataList;
  //   this.colorsList = this.commonService.colorList;
  // }

  // onShapeChange(event: any) {
  //   this.commonService.setShapes(event);
  //   this.selectedShape = this.commonService.selectedShape;
  // }

  // onColorChange(event: any) {
  //   this.commonService.changeColor(event);
  //   this.selectedColor = this.commonService.selectedColor;
  // }

  // vowelList: Array<{ key: string; val: number }> = [
  //   { key: 'a', val: 0 },
  //   { key: 'e', val: 0 },
  //   { key: 'i', val: 0 },
  //   { key: 'o', val: 0 },
  //   { key: 'u', val: 0 },
  // ];
  // @ViewChild('txtInput') inputElement!: ElementRef;
  // totalChar: number = 0;
  // setTotChar() {
  //   this.vowelList = [
  //     { key: 'a', val: 0 },
  //     { key: 'e', val: 0 },
  //     { key: 'i', val: 0 },
  //     { key: 'o', val: 0 },
  //     { key: 'u', val: 0 },
  //   ];
  //   this.totalChar = this.inputElement.nativeElement.value.length;
  //   const typedVal = this.inputElement.nativeElement.value;
  //   for (let index = 0; index < typedVal.length; index++) {
  //     const char = typedVal[index];
  //     const vowel = this.vowelList.find((v) => v.key === char);
  //     if (vowel) {
  //       vowel.val = (typedVal.match(new RegExp(vowel.key, 'g')) || []).length;
  //     }
  //   }
  // } 
// ----------------------Template Driven Forms-------------------
//   @ViewChild('fifthStdForm') formDivUi!: ElementRef;
//   formList: { rollNo: string; class: string }[] = [];

//   addForm() {
//     this.formList.push({ rollNo: '', class: '' });
//     console.log(':::::::::::::::::', this.formList);

//     const ids = (this.formList.length - 1).toString();
//     console.log('ids:', ids);
//     setTimeout(() => {
//       const element = document.getElementById(ids);
//       console.log('element:', element);
//       if (element) {
//         element.scrollIntoView({ behavior: 'auto' });
//       }
//     }, 0);
//   }
//   removeForm(index: number) {
//     console.log('index:', index);
//     this.formList.splice(index, 1);
//     console.log(':::::::::::::::::', this.formList);
//   }
//   onSubmit(form: any) {  
//     form.reset()

//     console.log('Form submitted:', this.formList);
//     console.log('Form submitted:', this.formList);
//   }
}
