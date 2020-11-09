import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostsService } from 'src/app/services/posts.service';



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})


export class PostComponent implements OnInit {



  public title: string;
  public author: string;
  public text: string;
  public tag: string;



  publication: FormGroup;

  constructor(private post: FormBuilder, private _servicio: PostsService) { 
    this.createForm();
  }



  ngOnInit(): void {
  }



  createForm(): void {
    this.publication = this.post.group({

      title: ['',[Validators.required, Validators.minLength(3)]],
      author: ['', [Validators.required, Validators.minLength(3)]],
      text: ['',[Validators.required, Validators.minLength(3)]],
      tag: ['',Validators.required]

    })
  }

  saveForm(): void {



    this.title = this.publication.value.title
    this.author = this.publication.value.author
    this.text = this.publication.value.text
    this.tag = this.publication.value.tag

    console.log(this.title);
    console.log(this.author);
    console.log(this.text);
    console.log(this.tag);
    
    
    this._servicio.sendPosts(this.title,this.author,this.text, this.tag);

    

  }

}
