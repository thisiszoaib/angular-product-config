import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductPreviewComponent } from './product-preview/product-preview.component';
import { NgtCanvas } from 'angular-three';
import { NgtsLoader } from 'angular-three-soba/loaders';

@NgModule({
  declarations: [AppComponent, ProductPreviewComponent],
  imports: [BrowserModule, NgtCanvas, NgtsLoader],
  bootstrap: [AppComponent],
})
export class AppModule {}
