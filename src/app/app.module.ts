import { BrowserModule } from '@angular/platform-browser';
import { CoursesComponent } from './courses.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CoursesSerivce } from './courses.service';
import {SummaryPipe} from './summary.pipe'
import {CustomTitleCase} from './customTitleCase.pipe';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    SummaryPipe,
    CustomTitleCase
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CoursesSerivce],
  bootstrap: [AppComponent]
})
export class AppModule { }
