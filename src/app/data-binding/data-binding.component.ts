import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-data-binding',
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css',
})
export class DataBindingComponent {
  selectedShape: string = '';
  selectedColor: string = '';
  shapesList: Array<{ id: number; shape: string }> = [];
  colorsList: Array<{ id: number; color: string }> = [];

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.shapesList = this.commonService.dataList;
    this.colorsList = this.commonService.colorList;
  }

  onShapeChange(event: any) {
    this.commonService.setShapes(event);
    this.selectedShape = this.commonService.selectedShape;
  }

  onColorChange(event: any) {
    this.commonService.changeColor(event);
    this.selectedColor = this.commonService.selectedColor;
  }
}
