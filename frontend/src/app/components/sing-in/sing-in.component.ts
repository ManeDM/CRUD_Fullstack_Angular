import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/interfaces/user';
import { ErrorService } from 'src/app/services/error.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.scss']
})
export class SingInComponent {

  username: String = '';
  password: String = '';
  confirmPassword: String = '';
  loading: boolean = false;

  constructor(private toastr: ToastrService,
    private _userService: UserService,
    private router: Router,
    private _errorService: ErrorService) {}

  ngOnInit(): void{

  }

  addUser() {
    //VAlidamos que el usuario ingrese valores
    if(this.username == '' || this.password == '' || this.confirmPassword == '') {
      this.toastr.error('Please, fill in the fields', 'Error')
      return;
    }

    //Validamos que los password coincidan

    if(this.password != this.confirmPassword) {
      this.toastr.error('Passwords dont match', 'Error')
      return;
    }

    //Creamos el objeto
    const user: User = {
      username: this.username,
      password: this.password
    }

    this.loading = true;
    this._userService.singIn(user).subscribe({
      next: (v) => {
      this.loading = false;
      this.toastr.success(`The user ${this.username} was registered`, )
      this.router.navigate(['/login ']);
      },

      error: (event: HttpErrorResponse) => {
        this._errorService.msjError
        this.loading = false; 
        
      }
    })  
  }

  
  }

