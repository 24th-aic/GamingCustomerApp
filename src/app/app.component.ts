import { Component } from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gaming Customer Support App';

  constructor(private route:ActivatedRoute, private router:Router, public authService:AuthService){

  }
logout():void{
  console.log("Logout");
  this.authService.logout();
  this.router.navigate(['/login']);
}

}
