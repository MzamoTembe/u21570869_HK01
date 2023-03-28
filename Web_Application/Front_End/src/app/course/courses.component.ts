 import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Course } from '../shared/course';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses:Course[] = []

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.GetCourses()
    console.log(this.courses)
  }

  success: boolean = false

  GetCourses()
  {
    this.dataService.GetCourses().subscribe(result => {
      let courseList:any[] = result
      courseList.forEach((element) => {
        this.courses.push(element)
      });
    })
  }

  reloadPage() {
    window.location.reload();
 }

  deleteCourse(id: any){
    this.dataService.deleteCourse(id)
    .subscribe({
      next: (response) => {
        this.router.navigate(['courses']);
      }
    })
    this.success=true;
  }
}
