import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  items = [
    { id: 1, name: 'Undergraduate', Institute: 'Indian Institute of technology Jodhpur', Result: '8.91 CGPA(As of 3rd Semester)', expanded: false },
    { id: 2, name: 'XII', Institute: 'Sri Chaitanya Junior College', Result: '984/1000', expanded: false },
    { id: 3, name: 'X', Institute: 'Paramita High School', Result: '10 CGPA', expanded: false }
  ]

  showDetails(item: any): void {
    item.expanded = !item.expanded;
    for (let itemi of this.items) {
      if (itemi != item) {
        itemi.expanded = false;
      }
    }
  }
}
