export class DogPicture {
    public imgSrc: string;
    public height: number;
    public width: number;

    constructor(imgSrc){
        this.imgSrc = imgSrc;
    }

    getDimensions(){
        this.height = 500;
        this.width = 700;
    }
}
