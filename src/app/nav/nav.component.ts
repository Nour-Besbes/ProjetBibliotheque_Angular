import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
declare var Swal: any;
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterOutlet,RouterModule,],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  constructor( private route:Router){}
  
  logOut(){
    Swal.fire({
      title: "Are you sure to log out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!"
      
    }).then((result: { isConfirmed: any; }) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "log out!",
          icon: "success"
        });
        this.route.navigateByUrl('/login');
      }
    });
  }

}
