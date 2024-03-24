import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm:any;
  constructor(private http:HttpClient,private router:Router,private fb:FormBuilder,private serv:ServicesService){
    this.loginForm=this.fb.group({
      Login:[""],
      Pass:[""]
    })
  }
  /*login() {
    console.log(this.loginForm.value);
    this.serv.login(this.loginForm.value).subscribe({
      next: (response) => {
        if (response.Role === 'Agent') {
          this.router.navigateByUrl('/gestion');
        } else if (response.Role === 'User') {
          this.router.navigateByUrl('/user');
        } 
      },
      error: (error) => {
        console.error('Erreur de connexion:', error);
        // Gérer les erreurs de connexion, par exemple afficher un message d'erreur à l'utilisateur
      }
    });
  }*/
  login(){
    this.router.navigateByUrl("/gestion");
  }

}
