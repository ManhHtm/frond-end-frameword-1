import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private auth: AuthService, private router: Router) {}

  onLogin(data: any) {
    this.auth.login(data).subscribe(
      (res) => {
        const token = res?.accessToken;
        const email = res?.user.email;
        const info = { token: token, email: email };
        localStorage.setItem('user', JSON.stringify(info));
        alert('Đăng nhập thành công');
        this.router.navigate(['/das']);
      },
      (error) => {
        alert(error.error);
      }
    );
  }
}
