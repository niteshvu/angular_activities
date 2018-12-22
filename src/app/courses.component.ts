import { Component } from '@angular/core';
import { CoursesSerivce } from './courses.service';

    @Component({
        selector: 'courses',
        template: `
                <input [(ngModel)] = "text"/>
                <h4>{{text | customTitleCase:'of':'the' }}</h4> <!--only strings to be passed  -->
            `
    })

    export class CoursesComponent {
        text = "";
    }