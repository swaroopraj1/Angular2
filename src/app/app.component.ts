import { Component } from '@angular/core';
import {CoursesComponent} from './courses.component'
import {AuthorsComponent} from './authors.component'

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `<h1> Hello Everyone! </h1> 
            <courses></courses>
            <authors></authors>
            `,

  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
