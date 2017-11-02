import {Component, Directive, NgModule} from '@angular/core'
import {CourseService} from './course.service'
import {AutoGrowDirective} from './auto-grow.directive'
@Component ({
    selector: 'courses',
    template: `
    <h1>Courses</h1>
    {{name}}
    <input type="text" autoGrow/>
    <ul>
    <li *ngFor="let abc of courses">
        {{abc}}
    </li>
    </ul>
    `,
    providers: [CourseService]
})

export class CoursesComponent {
    name= "List of courses";
    courses;

    constructor(courseService: CourseService) {
        this.courses= courseService.getCourses();
     }
}