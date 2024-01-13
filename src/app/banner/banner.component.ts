import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  showSideMenu: boolean = false
  onClick() {
    this.showSideMenu = !this.showSideMenu;
  }
  getColors() {
    const common = "pt-12 flex-col justify-start gap-4 h-full fixed top-12 left-0 bg-gray-500 w-1/2 text-center ease-in-out duration-1000";
    const conditional = this.showSideMenu ? "flex" : "hidden"
    return `${common} ${conditional}`;
  }

}
