import { Component, OnInit, ElementRef } from '@angular/core';
import { DOGPICTURES } from '../dogPictures';
import { DogPicture } from '../dog-picture';


@Component({
  selector: 'app-dog-page',
  templateUrl: './dog-page.component.html',
  styleUrls: ['./dog-page.component.css']
})
export class DogPageComponent implements OnInit {

  dogPictures : DogPicture[] = [];
  fixedDogPictures : DogPicture[] = [];
  dogPictureLinks = DOGPICTURES;
  loadImage : any = require('blueimp-load-image');
  dogPicDiv : any;

  constructor() {}

  ngOnInit() {
    this.populateDogPictures();
    this.determineOrientation();
  }

  populateDogPictures(){
    this.dogPictureLinks.forEach(dogPicSrc => {
      this.dogPictures.push(new DogPicture(dogPicSrc));
    });
  }

  determineOrientation(){
    this.dogPictures.forEach(dogPicture => {
      var picHolder : Promise<any> = new Promise((resolve) => {
        this.loadImage(
          dogPicture.imgSrc, 
          function(img, data) {
            if(img.type === "error") {
              console.error("There was an error loading the image.");
            }
            else{
              resolve(img);
            }
          },
          {maxWidth: 600}
          );
        });
        picHolder.then(data => {
          this.resize(data);
          this.fixedDogPictures.push(new DogPicture(data.src, data.height, data.width));
        })
    }, this);
  }

  resize(image : any){
    if(image.height > image.width){
      image.width = window.innerWidth/4;
      image.height = image.width*1.33;
    } 
    else{ 
      image.width = window.innerWidth/2.26;
      image.height = image.width*0.75;
    }
  }
}
