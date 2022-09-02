import { Component, OnInit } from '@angular/core';
import { ExpenseEntry } from './ExpenseEntry';

@Component({
  selector: 'app-expense-entry',
  templateUrl: './expense-entry.component.html',
  styleUrls: ['./expense-entry.component.css']
})
export class ExpenseEntryComponent implements OnInit {

  title: string;
  expenseEntry: ExpenseEntry;
  constructor() {
    this.title = "Expense Entry";
    this.expenseEntry = {
      id: 1,
      item: "Pizza",
      amount: 21,
      category: "Food",
      location: "Zomato",
      spendOn: new Date(2020, 6, 1, 10, 10, 10),
      createdOn: new Date(2020, 6, 1, 10, 10, 10),
    };
  }
  ngOnInit() {

  }
  flag = false;
  appName: string = "My first app in Angular 8";
  userName: string = "Peter kumar";
  myCSSClass = "red";
  applyCSSClass = true;
  myColor = 'pink';

  display() {

    this.flag = !this.flag;
  }
  showData($event: any) {
    // console.log("button is clicked!");
    if ($event) {
      console.log($event.target);

    }
    console.log($event.target.value);
  }

}
