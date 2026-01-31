import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Collapse } from 'bootstrap';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
closeNavbar() {
    const navbar = document.getElementById('mainNavbar');
    if (navbar && navbar.classList.contains('show')) {
      const bsCollapse = new Collapse(navbar);
      bsCollapse.hide();
    }
  }

}
