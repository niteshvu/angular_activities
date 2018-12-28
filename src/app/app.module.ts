import { BrowserModule } from '@angular/platform-browser';
import { CoursesComponent } from './courses.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoursesSerivce } from './courses.service';
import {SummaryPipe} from './summary.pipe'
import {CustomTitleCase} from './customTitleCase.pipe';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { BootstrapPannelComponent } from './bootstrap-pannel/bootstrap-pannel.component';
import { LikeComponent } from './like/like.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
// import { NewCourseFormComponentComponent } from './new-course-form-component/new-course-form-component.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    SummaryPipe,
    CustomTitleCase,
    FavoriteComponent,
    BootstrapPannelComponent,
    LikeComponent,
    InputFormatDirective,
    ZippyComponent,
    SignupFormComponent,
    NewCourseFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CoursesSerivce],
  bootstrap: [AppComponent]
})
export class AppModule { }
