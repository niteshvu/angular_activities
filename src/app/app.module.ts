import { ChangePasswordComponent } from './change-password/change-password.component';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
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
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { PostsComponent } from './posts/posts.component';

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
    NewCourseFormComponent,
    PasswordResetComponent,
    ChangePasswordComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [CoursesSerivce],
  bootstrap: [AppComponent]
})
export class AppModule { }
