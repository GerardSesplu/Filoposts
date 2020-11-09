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
    
  }

  ngOnInit() {
  }

  readMore(id){
    if(id == 'mas'){
      document.getElementById('desplegable').style.display = "block";
      document.getElementById('mas').style.display = "none";
    } else {
      document.getElementById('desplegable').style.display = "none";
      document.getElementById('mas').style.display = "inline";
    }
  }

}
