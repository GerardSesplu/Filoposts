import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//SERVICES
import { PostsService } from './services/posts.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { PostComponent } from './components/post/post.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReadMorePipe } from './read-more.pipe';
import { ReadlessPipe } from './readless.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RegisterComponent,
    PostComponent,
    ReadMorePipe,
    ReadlessPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
