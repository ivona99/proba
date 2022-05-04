import { HomeService } from './../home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public posts:any = [];
  public errorMsg:any;
  public imgArray:any = [];
  public slideIndex = 1;

  showSlides(slideIndex: number): void;

  constructor(private homeService: HomeService) { }
  plusSlides(n:number) {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n: number){
    this.showSlides(this.slideIndex = n);
  }
 showSlides(n: number){
   let i;
   let slides = document.getElementsByClassName("mySlides");
   let dots = document.getElementsByClassName("dot");
   if(n>slides.length) {this.slideIndex = 1}
   if(n<1) {this.slideIndex = slides.length}


 }


  ngOnInit(): void {
    this.homeService.getBanners()
        .subscribe((data: any) => {
          for(var i=0; i<data.Result.length; i++){
            this.imgArray.push(data.Result[i].FullImageUrl);

          }
          console.log(this.imgArray);
        // console.log("asfasfasf", data.Result);
        });


 }


}
