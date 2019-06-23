import { Component, OnInit } from '@angular/core';
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

  constructor() { }

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
      dogPicture.height = 500;
      dogPicture.width = 700;
    });
  }



}
