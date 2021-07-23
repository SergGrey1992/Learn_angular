import {Component, OnInit} from '@angular/core'

// @Component({
//   selector: 'app-card',
//   template: `
//     <div class="card">
//       <h2>Card component</h2>
//       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, omnis.</p>
//     </div>
//   `,
//   styles: [`
//     .card {
//       padding: .5rem 1rem;
//       border: 1px dashed #ccc;
//       margin-bottom: 1rem;
//     }
//     h2 {
//       margin-bottom: .5rem;
//     }
//   `]
//
// })

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit{
  title = 'My Card Title'
  text = 'My simple text'
  changeTitle () {
    this.title = 'Jira bla'
  }
  myInfo () {
    return 'this my info'
  }
  inputHandler(value: string) {
    this.title = value
  }
  changeInput() {
    console.log(this.title)
  }
  ngOnInit() {
  }
}
