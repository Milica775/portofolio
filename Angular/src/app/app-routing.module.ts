import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { HotelsComponent } from './hotels/hotels.component';
const routes: Routes = [


  {
    path: '', redirectTo: '/registration',pathMatch: 'full'
  },
  {
    path: '', redirectTo: '/login',pathMatch: 'full'
  },
  {
    path: '', redirectTo: '/admin',pathMatch: 'full'
  },
  {
    path: '', redirectTo: '/hotels',pathMatch: 'full'
  },
{
  path: 'registration', component: RegistrationComponent
},
{
  path: 'login', component : LoginComponent
},
{
  path: 'admin', component : AdminComponent
},
{
  path: 'hotels', component : HotelsComponent
}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


