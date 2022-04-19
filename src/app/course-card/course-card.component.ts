import { Course } from './../model/course';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {
  @Input() course?: Course;

  @Output() courseSelected: EventEmitter<Course> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
onCourseViewed(){
  console.log("Card component-button clicked");
  this.courseSelected.emit(this.course);
}
}
