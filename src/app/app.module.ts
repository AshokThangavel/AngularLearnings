import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './Server/Server.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { warningComponent } from './warning-alert/warning-alert';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    warningComponent,
    SuccessAlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
