import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent{

  form = new FormGroup({ //accepets FormControl or a FormArray
    topics: new FormArray([])
  });

  addTopic(topic: HTMLInputElement){
    this.topics.push(new FormControl(topic.value)); // pushing FormControl objects into topics array
    topic.value = ''; //Clearing field after enter
  }

  removeItem(topic: FormControl){
     let index = this.topics.controls.indexOf(topic); //as control is an argument for Abstractcontrol class which is a super class of the FromArray
     this.topics.removeAt(index);
  }

  get topics(){
    return this.form.get('topics') as FormArray //casting form object as FormArray
  }
 
}
