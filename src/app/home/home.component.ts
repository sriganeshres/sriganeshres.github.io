import { Component, OnInit } from '@angular/core';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { AppModule } from '../app.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgxTypedJsModule, AppModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  ngOnInit(): void {
      
  }
}
