import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { IResponse } from 'src/Interfaces/IResponse';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
  providers: []
})
export class HomePage {
  constructor(private http: HttpClient) {}

  post: IResponse = {};
  ngOnInit() {
    this.getPostById(5);
  }

  getPostById(postId: number = 5) {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    this.http.get(url).subscribe((data) => {
      this.post = data;
    });
  }
}

