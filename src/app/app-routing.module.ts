import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { UserTableComponent } from './user-table/user-table.component';

const routes: Routes = [
  {path: '', redirectTo: 'Register', pathMatch: 'full'},
  {path: 'Register', component: RegisterComponent},
  {path: 'UserTable', component: UserTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
