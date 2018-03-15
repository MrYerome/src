import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  message: string = "Vous êtes déconnecté";
  name: string;
  pw: string;

  constructor(public authService: AuthService, private router: Router) { }

  setMessage() {
    this.message = this.authService.isLog ?
      'Vous êtes connecté.' : 'Identifiant ou mot de passe incorrect';
  }

  login() {
    console.log("rert");
    this.message = "Connexion en cours...";
    this.authService.login(this.name, this.pw).subscribe(() => {
      this.setMessage();
      if (this.authService.isLog) {
        let redirect: string = this.authService.redirectUrl ? this.authService.redirectUrl : '/disque/all';
        this.router.navigate([redirect]);
      }
      else {
        this.pw = "";
      }
    });
  }

  logout() {
    this.authService.logout();
    this.setMessage;
    this.router.navigate(['login']);
  }}
