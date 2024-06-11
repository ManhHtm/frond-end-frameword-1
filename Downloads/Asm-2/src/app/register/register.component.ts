import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  constructor(private auth: AuthService, private router: Router) {}

  onRegister(data: any) {
    this.auth.register(data).subscribe(
      (res) => {
        alert('Đăng ký thành công');
        this.router.navigate(['/login']);
      },
      (error: any) => {
        alert(error.error);
      }
    );
  }
}
