import { Injectable } from '@angular/core';

import { Observable, map, of } from 'rxjs';

import { Project } from './project-schema';
import { PROJECTS } from './project-list';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  getProjects(): Observable<Project[]> {
    return of(PROJECTS);
  }

  constructor() { }

  getProject(id: number | string) {
    return this.getProjects().pipe(
      map((projects: Project[]) => projects.find(project => project.id === +id)!)
    );
  }
}
