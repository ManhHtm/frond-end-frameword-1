import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private http: HttpClient, private router: Router) {}
  apiUrl = 'http://localhost:3000/projects';

  //

  getList() {
    return this.http.get(this.apiUrl);
  }
  //lâys thông tin chi tiết
  getDetail(id: string) {
    return this.http.get(this.apiUrl + '/' + id);
  }
  //thêm mới
  createProject(data: any) {
    return this.http.post(this.apiUrl, data);
  }

  //xoa project
  deleteProject(id: string) {
    return this.http.delete(this.apiUrl + '/' + id);
  }
}
