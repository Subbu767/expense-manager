import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpenseEntryComponent } from './expense-entry/expense-entry.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { TestingComponent } from './testing/testing.component';
import { ExpenseEntryListComponent } from './expense-entry-list/expense-entry-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpenseEntryComponent,
    NavbarComponent,
    TestingComponent,
    ExpenseEntryListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
