import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cities;

  constructor() {
  }

  ngOnInit() {
    this.cities = [
      { name: 'tokyo' },
      { name: 'paris' },
      { name: 'doha' },
      { name: 'rabat' },
      { name: 'tunis' }
    ];
  }
}