import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashbordComponent } from './dashbord/dashbord.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'dashboard',
    component: DashbordComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
