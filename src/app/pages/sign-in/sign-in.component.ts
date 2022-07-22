import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { SignInService } from './services/sign-in.service';
import jwt_decode from 'jwt-decode';
import { LoggedService } from 'src/app/core/services/logged.service';
import Swal from 'sweetalert2';

declare var $: any
@Component({
  selector: 'app-reset-password',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  view = false

  constructor(
    private fb: FormBuilder,
    private SignInService: SignInService,
    private spinnerService: NgxSpinnerService,
    private router: Router,
    private loggedService: LoggedService,
  ) {  }

  SignInForm = this.fb.group({
    userOrEmail: ['', Validators.required],
    password: ['', Validators.required],
    remember: [true]
    });
  logged = false;
  signin = false;
  ngOnInit(): void {
    this.SignInForm.controls.userOrEmail.setValue(sessionStorage.getItem('userOrEmail'))
    const token = sessionStorage.getItem('token') ?? null
    if(token){
      try {
        this.loggedService.isLogged(token).toPromise().then((v : any) => {
          // console.log(v)
          sessionStorage.setItem('token',v.body?.token)
          this.router.navigate(['/dash/home']);
        }).catch((_)=> {
          sessionStorage.removeItem('token')
        });

      } catch (error) {
        sessionStorage.removeItem('token')
      }
    }
  }


  async login(){
    if(this.SignInForm.invalid){
      this.SignInForm.markAllAsTouched()
      return
    }
    this.spinnerService.show();
    try {
        const body = {
          userOrEmail: this.SignInForm.controls.userOrEmail.value,
          password: this.SignInForm.controls.password.value
        };
        const user: any = await this.SignInService.login(body).toPromise();
        this.signin = false;
        this.logged = true;
        if(this.SignInForm.controls.remember.value){
          sessionStorage.setItem('userOrEmail', this.SignInForm.controls.userOrEmail.value)
        }else{
          sessionStorage.setItem('userOrEmail', '');
        }
        sessionStorage.setItem('token', user.token)
        const dataUser: any = jwt_decode(user.token);
        sessionStorage.setItem('userData', JSON.stringify(dataUser.userData));

        this.router.navigate(['/dash/home']);

      } catch (error) {
        console.log(error)
        this.signin = true;
        this.logged = false;
        Swal.fire({
          position: 'top-right',
          title: 'Error',
          text: 'Los datos no coinciden con nuestros registros',
          showConfirmButton: false,
          backdrop: false,
          width: 300,
          timer: 1500,
          customClass: {
            title: 'title-alert',
            htmlContainer:'content-alert'
          }
        })
      }
    this.spinnerService.hide();
  }
}
