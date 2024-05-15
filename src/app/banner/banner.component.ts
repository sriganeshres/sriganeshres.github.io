import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [RouterModule, MatIconModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  showSideMenu: boolean = false
  onClick() {
    this.showSideMenu = !this.showSideMenu;
  }
  getText() {
  if (!this.showSideMenu) return '\u2630'; // Unicode character for ☰ (Hamburger menu)
  else return '\u2715'; // Unicode character for ✕ (Close icon)
  }

  getColors() {
    const common = "pt-12 flex-col justify-start gap-4 w-full z-20 fixed top-[80px] h-full left-0 bg-[#1571AF] text-center ease-in-out duration-1000";
    const conditional = this.showSideMenu ? "flex" : "hidden"
    return `${common} ${conditional}`;
  }

  getColors2() {
  const common = "w-1/2 flex-row justify-center gap-4 w-full z-20 fixed bottom-10 left-0 bg-[#1571AF] text-center ease-in-out duration-1000";
  const conditional = this.showSideMenu ? "flex" : "hidden"
    return ` ${conditional} ${common}`;
  }

  onClickPage() {
    this.showSideMenu = false;
  }

}
