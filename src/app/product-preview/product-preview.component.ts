import { Component, Input, OnInit } from '@angular/core';
import { Scene } from './scene/scene.component';

@Component({
  selector: 'app-product-preview',
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.scss'],
})
export class ProductPreviewComponent {
  scene = Scene;
  @Input() color = '';
}
