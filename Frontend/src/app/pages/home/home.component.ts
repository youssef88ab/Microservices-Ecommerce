import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  
  ngOnInit(): void {
    const token = localStorage.getItem('token');
  console.log('Token from localStorage:', token);  // Debugging
  }


}
