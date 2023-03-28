import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './course/courses.component';
import { AddCourseComponent } from './course/add-course/add-course.component';
import { EditCourseComponent } from './course/edit-course/edit-course.component';

const routes: Routes = [
  {path: 'courses', component: CoursesComponent},
  {path: 'courses/add', component: AddCourseComponent}, 
  {path: 'courses/edit/:id', component: EditCourseComponent},   
  {path: '', redirectTo: '/courses', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
