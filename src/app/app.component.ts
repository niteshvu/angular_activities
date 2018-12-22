import { Component } from '@angular/core';
import { EventPayLoad } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: "Title",
    isFavorite: true
  }
  like = {
    numberOfLikes : 5,
    isClicked: false
  }
  onFavoriteChanged = (payload: EventPayLoad) => {
    console.log(payload.newValue);
  }
}
