import { Component, OnInit } from '@angular/core';
import { DOGPICTURES } from '../dogPictures';

@Component({
  selector: 'app-dog-page',
  templateUrl: './dog-page.component.html',
  styleUrls: ['./dog-page.component.css']
})
export class DogPageComponent implements OnInit {

  dogPictures = DOGPICTURES;

  constructor() { }

  ngOnInit() {
  }

}
