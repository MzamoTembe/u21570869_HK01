import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Course } from '../shared/course';
import { AnyARecord } from 'dns';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiUrl = 'http://localhost:5116/api/'

  httpOptions ={
    headers: new HttpHeaders({
      ContentType: 'application/json' 
    })
  } 
  constructor(private httpClient: HttpClient) { 
  }

  GetCourses(): Observable<any>{
    return this.httpClient.get(`${this.apiUrl}Course/GetAllCourses`)
    .pipe(map(result => result))
  }

  addCourse(addCourseRequest: Course): Observable<Course>{
    addCourseRequest.courseId = 0;
    return this.httpClient.post<Course>(`${this.apiUrl}Course/AddCourse`, addCourseRequest)
  }

  getCourse(id: any): Observable<any>{
    return this.httpClient.get<Course>(`${this.apiUrl}Course/GetCourse/` + id)
  }

  updateCourse(id: any, updateCourseRequest: Course): Observable<any>{
    return this.httpClient.put<Course>(`${this.apiUrl}Course/UpdateCourse/` + id, updateCourseRequest)
  }

  deleteCourse(id: any): Observable<any>{
    return this.httpClient.delete<Course>(`${this.apiUrl}Course/DeleteCourse/` + id)
  }
  

}


