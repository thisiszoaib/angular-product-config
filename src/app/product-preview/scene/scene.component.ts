import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  Input,
  computed,
  effect,
  signal,
} from '@angular/core';
import { NgtArgs, extend } from 'angular-three';
import { NgtsOrbitControls } from 'angular-three-soba/controls';
import { NgtsContactShadows } from 'angular-three-soba/staging';
import { injectNgtsGLTFLoader } from 'angular-three-soba/loaders';
import {
  AmbientLight,
  Mesh,
  MeshStandardMaterial,
  PointLight,
  Vector3,
} from 'three';

extend({ AmbientLight, PointLight, Vector3 });

@Component({
  standalone: true,
  templateUrl: './scene.component.html',
  imports: [NgtsOrbitControls, NgtArgs, NgtsContactShadows],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Scene {
  Math = Math;

  private _color = signal('');
  @Input() set color(value: string) {
    this._color.set(value);
  }

  private cupGTLF = injectNgtsGLTFLoader(() => 'assets/cup.glb');
  cup = computed(() => this.cupGTLF()?.scene || null);

  constructor() {
    effect(() => {
      const [cup, color] = [this.cup(), this._color()];
      if (!cup) return;
      const material = (cup.getObjectByName('Object_2') as Mesh)
        .material as MeshStandardMaterial;
      material.color.set(color);
    });
  }
}
