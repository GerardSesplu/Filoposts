import { Component, OnInit } from '@angular/core';
import { PostsService } from  './../../services/posts.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts:any[] = [];

  constructor(private _servicio: PostsService) { 

    this.posts = _servicio.getPosts();
    console.log(this.posts);

    // this.buttonFunction;
    
  }

  ngOnInit() {
  }


  // buttonFunction(): void {

  //   var buttonMore: any;
  //   var buttonLess: any;

  //   buttonMore = document.getElementById('mas');
  //   buttonMore.addEventListener('click', this.buttonMoreClick());

  //   buttonLess = document.getElementById('menos');
  //   buttonLess.addEventListener('click', this.buttonLessClick());

  // }
  

  // buttonMoreClick(): void { 

  //   document.getElementById('desplegable').style.display = 'block';
  //   document.getElementById('mas').style.display = 'none';
  //   document.getElementById('menos').style.display = 'block';

  // }
  
  // buttonLessClick(): void {
  //   document.getElementById('desplegable').style.display = 'none';
  //   document.getElementById('mas').style.display = 'block';
  //   document.getElementById('menos').style.display = 'none';
  // }

}
