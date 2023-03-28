import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Course } from 'src/app/shared/course';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {

  addCourseRequest: Course = {
    courseId: 0,
    name: '',
    duration: '',
    description: ''
  };

  constructor(private dataservice: DataService, private router: Router) { }

  ngOnInit(): void {
  }

  addCourse(){
    this.dataservice.addCourse(this.addCourseRequest)
    .subscribe({
      next: (course) =>
      this.router.navigate(['courses'])
    })
  }

  cancel(): void {
    this.router.navigate(['courses']);
  }
}
