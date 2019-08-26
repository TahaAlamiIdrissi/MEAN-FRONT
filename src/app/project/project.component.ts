import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../service/project.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projects = [];
  constructor(private projectService: ProjectService,
              private router: Router) { }

  ngOnInit() {
    this.getAllProjects();
  }


  getAllProjects() {
    this.projectService._getAllProjects()
      .subscribe(res => {
        const array = res.map(e => this.projects.push(e));
      }, err => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this.router.navigate(['/login']);
          }
        }
      });
  }
}
