import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Course } from 'src/app/shared/course';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent implements OnInit {

  courseDetails: Course = {
    courseId: 0,
    name: '',
    duration: '',
    description: ''
  }

  constructor(private route: ActivatedRoute, private dataservice: DataService, private router: Router) {
   }

  ngOnInit(): void {


    this.route.paramMap.subscribe({
      next: (parameters) => { 
        const CourseId = parameters.get('id');

        if(CourseId){
          this.dataservice.getCourse(CourseId)
          .subscribe({
            next: (response) => {
              this.courseDetails = response;
            }
          })
        } 
      }
    })
  }

  updateCourse(){
    
    this.dataservice.updateCourse(this.courseDetails.courseId, this.courseDetails)
    .subscribe({
      next: (response) => {
        this.router.navigate(['courses'])
      }
    })
    console.log(this.courseDetails)
  }
  cancel(): void {
    this.router.navigate(['courses']);
  }
}


