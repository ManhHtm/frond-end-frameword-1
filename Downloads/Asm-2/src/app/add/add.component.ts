import { HttpClient, HttpClientModule } from '@angular/common/http';

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [RouterLink, HttpClientModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddComponent {
  list: any = [];
  constructor(private http:HttpClient) {}

  ngOnInit(): void {
    let apiUrl = 'http://localhost:3000/projects';

    
    this.http.get(apiUrl).subscribe( res => {

      this.list = res; 
      console.log(this.list);
    })
  }

  onDelete(id: any): void {
    if(confirm('Xác nhận xóa sản phẩm?')) { 
      let apiUrl = 'http://localhost:3000/projects/'+id;
      this.http.delete(apiUrl).subscribe(res => {
        this.ngOnInit();
      })
    }
  }
}
