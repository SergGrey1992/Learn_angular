import {Component, Output} from '@angular/core';

export interface Post {
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Array<Post> = [
    {title: 'Хочу выучить Angular компоненты', text: 'Учу клмпоненты', id: 1},
    {title: 'Следующий блок', text: 'Будет много чего', id: 2},
  ]

  updatePosts(post: Post) {
    this.posts.unshift(post)
    //console.log('updatePosts', post)
  }
  removePost(id: number) {
    console.log('id', id)
    this.posts = this.posts.filter((post) => post.id !== id )
  }
  constructor() {}

}
