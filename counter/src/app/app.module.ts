import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material/material.module';

import { AppComponent } from './app.component';
import { CountComponent } from './count/count.component';

@NgModule({
  declarations: [
    AppComponent,
    CountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
