import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HeaderComponent, CommonModule,RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title:string = 'weather';
  constructor(public router:Router){  }

  goToDefaultPath()
  {
    this.router.navigate([''])
  }

 
}
