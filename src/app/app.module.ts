import { NgtCanvasModule } from '@angular-three/core';
import { NgtColorAttributeModule } from '@angular-three/core/attributes';
import {
  NgtAmbientLightModule,
  NgtPointLightModule,
} from '@angular-three/core/lights';
import { NgtPrimitiveModule } from '@angular-three/core/primitive';
import { NgtSobaLoaderModule } from '@angular-three/soba/loaders';
import { NgtSobaOrbitControlsModule } from '@angular-three/soba/controls';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductPreviewComponent } from './product-preview/product-preview.component';

@NgModule({
  declarations: [AppComponent, ProductPreviewComponent],
  imports: [
    BrowserModule,
    NgtCanvasModule,
    NgtSobaLoaderModule,
    NgtPrimitiveModule,
    NgtSobaOrbitControlsModule,
    NgtAmbientLightModule,
    NgtPointLightModule,
    NgtColorAttributeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
