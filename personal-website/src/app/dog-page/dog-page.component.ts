import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { DOGPICTURES } from '../dogPictures';
import { DogPicture } from '../dog-picture';

@Component({
  selector: 'app-dog-page',
  templateUrl: './dog-page.component.html',
  styleUrls: ['./dog-page.component.css']
})
export class DogPageComponent implements OnInit {

  dogPictures : DogPicture[] = [];
  dogPictureLinks = DOGPICTURES;
  loadImage : any = require('blueimp-load-image');
  dogPicDiv : any;

  constructor(private rd: Renderer2) {}

  ngOnInit() {
    this.populateDogPictures();
    this.determineDimensions();
  }

  populateDogPictures(){
    this.dogPictureLinks.forEach(dogPicSrc => {
      this.dogPictures.push(new DogPicture(dogPicSrc));
    });
  }

  determineDimensions(){
    this.dogPictures.forEach(dogPicture => {
      this.loadImage(
        dogPicture.imgSrc, 
        function(img, data) {
          if(img.type === "error") {
            console.error("Error loading image sry");
          } else {
            document.body.appendChild(img);
            //document.querySelector('#dogPicDiv').appendChild(img);
            console.log("Original image width: ", data.originalWidth);
            console.log("Original image height: ", data.originalHeight);
          }
        },
        {maxWidth: 600}
      );
    });
  }



}
