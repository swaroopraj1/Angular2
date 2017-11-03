import {Component} from '@angular/core'
import {AuthorService} from './author.service'

@Component ({
    selector: 'authors',
    template: `
    <h1>Authors</h1>
    {{name}}
    <ul>
    <li *ngFor="let efg of authors">
    {{efg}}
    </li>
    <li *ngIf= "Login == true"> Hidden Hero is displayed beacuse of ngIF!
    </li>
    </ul>

    `,
    providers: [AuthorService]
})

export class AuthorsComponent {
    name= "List of Authors";
    authors: string[];
    Login= true

    constructor(authorService: AuthorService) {
        this.authors= authorService.getAuthor();
     }
}