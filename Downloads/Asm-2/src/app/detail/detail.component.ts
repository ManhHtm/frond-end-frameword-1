import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  product: string = '';
  project: any = {};

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.product = this.route.snapshot.params['product'];
  }

  ngOnInit(): void {
    const apiUrl = `http://localhost:3000/projects/${this.product}`;

    this.http.get(apiUrl).subscribe(
      (res) => {
        this.project = res;
      },
      (error) => {
        console.error('Error fetching project data', error);
      }
    );
  }
}
