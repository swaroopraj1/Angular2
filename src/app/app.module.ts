import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CoursesComponent} from "./courses.component";
import { AppComponent } from './app.component';
import { CommonModule } from "@angular/common";
import {AuthorsComponent} from './authors.component'
import {AutoGrowDirective} from './auto-grow.directive'
import {FormsModule} from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent, CoursesComponent, AuthorsComponent, AutoGrowDirective
  ],
  imports: [
    BrowserModule, CommonModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
