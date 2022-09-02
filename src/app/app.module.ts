import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { ExpenseEntryComponent } from './expense-entry/expense-entry.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { TestingComponent } from './testing/testing.component';
import { ExpenseEntryListComponent } from './expense-entry-list/expense-entry-list.component';
=======
// import { AlertModule } from 'ngx-bootstrap';
>>>>>>> abd93183b69e7d0f94fe06b963d9d01cbd563bba

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
<<<<<<< HEAD
    AppRoutingModule,
    FormsModule
=======
    AppRoutingModule
    // AlertModule.forRoot()
>>>>>>> abd93183b69e7d0f94fe06b963d9d01cbd563bba
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
