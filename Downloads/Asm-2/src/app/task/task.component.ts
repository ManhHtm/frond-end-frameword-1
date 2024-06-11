import { CommonModule } from '@angular/common';

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  constructor(private projectService: ProjectService, private router: Router) {} 

  onCreate(project: any): void {
    let valid = true;
    if (project.name.trim() == '' || project.name.trim().length < 3) {
      valid = false;
    }

    if (valid) {
      this.projectService.createProject(project).subscribe((res) => {
        if (res) {
          alert('Thêm mới thành công');
          this.router.navigate(['/list']);
        }
      });
    }
  }
}
