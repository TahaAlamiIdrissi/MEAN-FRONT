import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projects = {};
  _gitApiUrl = `http://localhost:3000/api/git/repos`;
  constructor(private http: HttpClient) { }

  _getAllProjects(){
    return this.http.get<any>(this._gitApiUrl,this.projects);
  }
}
