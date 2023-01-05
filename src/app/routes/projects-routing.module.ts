import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProjectListComponent } from '../projects/project-list/project-list.component';
import { ProjectDetailComponent } from '../projects/project-detail/project-detail.component';

const projectsRoutes: Routes = [
  { path: 'projects', component: ProjectListComponent},
  {path: 'projects/:id', component: ProjectDetailComponent},
]

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(projectsRoutes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
