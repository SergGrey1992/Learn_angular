import { Component } from '@angular/core';

export interface IPost {
  title: string
  text: string
  id: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts: Array<IPost> = []

  constructor() {
    this.posts = [
      {title: 'Хочу выучить Angular компоненты', text: 'Учу клмпоненты', id: 1},
      {title: 'Следующий блок', text: 'Будет много чего', id: 2},
    ]


  }



}
