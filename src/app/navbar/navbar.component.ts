import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  checkboxvalue = false;
  textboxvalue;
  programingLangs = ['java', 'spring', 'angular', 'html', 'nodejs']
  weekday;
  shopID: number = 10;
  shopStatus: string = 'OPEN';

  constructor() {
    this.shopStatus = Math.random() > 0.5 ? 'OPEN' : 'CLOSED';
  }

  ngOnInit(): void {
  }


  getColor() {
    return this.shopStatus === 'OPEN' ? 'red' : 'blue';
  }

}
