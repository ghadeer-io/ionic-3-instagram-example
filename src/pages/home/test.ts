import { Component } from '@angular/core';
import { Instagram } from "@ionic-native/instagram";
import { Camera } from "@ionic-native/camera";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  constructor(private instagram: Instagram,
              public camera: Camera) {
  }

  sharePhoto() {
  }

  openWithCamera() {
  }
}
