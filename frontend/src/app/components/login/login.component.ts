import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  constructor (private toastr: ToastrService,
    private _userService: UserService,
    private router: Router) {  }

  ngOnInit(): void {

  }


  login() {

    //Validamos que el usuario ingresedatos
   if(this.username == '' || this.password == '') {
    this.toastr.error('User and Password are required', ' Error')
    return
   }
   
   //Creamos el Objeto
   const user: User = {
    username: this.username,
    password: this.password
   }
   
   this._userService.logIn(user).subscribe({
    next: (token) => {
      this.router.navigate(['/products'])
      localStorage.setItem('token', token)
      console.log(token)
    }
   })

  }
}
