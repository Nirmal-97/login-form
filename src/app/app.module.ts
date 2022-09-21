import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ToastNoAnimationModule, ToastrModule } from 'ngx-toastr';
import { DashbordComponent } from './dashbord/dashbord.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [AppComponent, DashbordComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    ToastrModule.forRoot(),
    ToastNoAnimationModule.forRoot(),
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
