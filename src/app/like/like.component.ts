import { Component, Input } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent{
  @Input() numberOfLikes: number;
  @Input() isClicked: boolean;
  
  onClicked = () => {
    this.isClicked ? this.numberOfLikes-- : this.numberOfLikes++;
    this.isClicked = !this.isClicked;
  }
}
