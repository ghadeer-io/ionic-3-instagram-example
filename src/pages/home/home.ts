import { Component } from '@angular/core';
import {Instagram} from "@ionic-native/instagram";
import {CameraOptions, Camera} from "@ionic-native/camera";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private instagram: Instagram,
              public camera: Camera) {
  }

  //
  sharePhoto() {
    this.instagram.isInstalled().then((installed) => {
      if (!installed) {
        return alert('Whoops! It looks like instagram is not installed');
      }
      const options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      };

      this.camera.getPicture(options).then((imageData) => {
          let base64Encoded = 'data:image/jpeg;base64,' + imageData;

          this.instagram.share(base64Encoded, 'Caption')
            .then(() => console.log('Shared!'))
            .catch((error: any) => console.error(error));
        },
        (err) => {
          console.log(err);
          alert('error: ' + err);
        });
    });
  }

  openWithCamera() {
    this.instagram.isInstalled().then((installed) => {
      if (!installed) {
        return alert('Whoops! It looks like instagram is not installed');
      }

      window.open('instagram://camera', '_system', 'location=no');
    });
  }
}
