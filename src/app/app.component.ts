import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoAPI';
  posts : any[] = [];

  constructor(private http: HttpClient) {
    // just to create a client object
    // this.loadPosts();
  }

  loadPosts() {
    
    this.http.get('http://localhost:8080/allBooks').subscribe((posts:any) => {
      this.posts = posts;
    });
  }
}
