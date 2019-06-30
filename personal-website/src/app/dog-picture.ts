export class DogPicture {
    public imgSrc: string;
    public height: number;
    public width: number;

    constructor(imgSrc, height?, width?){
        this.imgSrc = imgSrc;

        if(height && width){
          this.height = height;
          this.width = width;
        }
    }

    getDimensions(){
        this.height = 500;
        this.width = 700;
    }
}
