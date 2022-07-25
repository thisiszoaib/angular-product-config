import { NgtSobaOrbitControls } from '@angular-three/soba/controls';
import { NgtGLTFLoaderService } from '@angular-three/soba/loaders';
import { Component, Input, OnInit } from '@angular/core';
import { Mesh, MeshStandardMaterial, Object3D, PerspectiveCamera } from 'three';

@Component({
  selector: 'app-product-preview',
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.scss']
})
export class ProductPreviewComponent implements OnInit {

  @Input()
  set color(value: string) {
    this.applyColorToMaterial(value);
    this.#color = value;
  }

  #color = '';

  cup$ = this.ngtGLTFLoaderService.load('/assets/cup.glb');

  cupMaterial: MeshStandardMaterial | undefined;

  constructor(private ngtGLTFLoaderService: NgtGLTFLoaderService) { }

  ngOnInit(): void {
  }

  cupReady(object: Object3D) {
    this.cupMaterial = <MeshStandardMaterial>(<Mesh>object.getObjectByName('Object_2')).material;
    this.applyColorToMaterial(this.#color);
  }

  setInitial(controls: NgtSobaOrbitControls) {
    const orbitControls = controls.controls;
    const camera = orbitControls.object as PerspectiveCamera;
    camera.zoom = 4.5;
    camera.position.setY(4);

    orbitControls.enableZoom = false;
    orbitControls.autoRotate = true;
    orbitControls.autoRotateSpeed = 10;
  }

  applyColorToMaterial(color: string) {
    if (this.cupMaterial) {
      this.cupMaterial.color.setHex(parseInt(color.substring(1), 16));
    }
  }

}
