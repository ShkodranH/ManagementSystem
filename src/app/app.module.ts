import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { UserTableComponent } from './user-table/user-table.component';
import { DashesPipe } from './pipes/dashes/dashes.pipe';
import { SortPipe } from './pipes/sort/sort.pipe';
import { EncryptPipe } from './pipes/encrypt/encrypt.pipe';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    UserTableComponent,
    DashesPipe,
    SortPipe,
    EncryptPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
