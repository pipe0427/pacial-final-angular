import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioSesrvice } from 'src/app/services/usuario-sesrvice.service';
import { SwalUtils } from 'src/app/utils/swal-utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup
  

  constructor(private fb: FormBuilder,
    private router:Router,
    private usuarioService:UsuarioSesrvice) {

  }

  ngOnInit() {
    
    this.loginForm = this.iniciarFormulario()
  }

  iniciarFormulario(): FormGroup {
    return this.fb.group({
      email: ['admin', [Validators.required]],
      contrasena: ['admin', [Validators.required,Validators.minLength(5)]]
    })

  }

  onLogin() {
    console.log(this.loginForm)
    if (this.loginForm.valid) {
    const respuesta =  this.usuarioService.loginusuario(this.loginForm.get('email')?.value,this.loginForm.get('contrasena')?.value)

    if(respuesta){
      sessionStorage.setItem('user', this.loginForm.get('email')?.value)
      this.router.navigateByUrl('dashboard')
      SwalUtils.customMessageOk('Bienvenido','login Correcto')        
    }else{
      this.router.navigateByUrl('login')
      SwalUtils.customMessageError('Ops! Hubo un error', 'login Incorrecto')  
    }
    } else {
      this.router.navigateByUrl('login')
      SwalUtils.customMessageError('Ops! Hubo un error', 'login Incorrecto')        
    }
    console.log(this.loginForm);

  }
}
