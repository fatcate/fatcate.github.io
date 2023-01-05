import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, switchMap } from 'rxjs';

import { PROJECTS } from 'src/app/projects/project-list';
import { Project } from '../project-schema';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit{

  project$!: Observable<Project>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ProjectService
  ) {}

    ngOnInit() {
      this.project$ = this.route.paramMap.pipe(
        switchMap((params: ParamMap) => this.service.getProject(params.get('id')!))
      );
    }

    gotoProjects(project: Project) {
      const projectId = project ? project.id : null;
      this.router.navigate(['/projects', {id: projectId}]);
    }
}
