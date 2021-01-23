import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Body1Component } from './body1/body1.component';
import { MatIconModule, } from '@angular/material';
import { Body2Component } from './body2/body2.component';
import { MatButtonModule } from '@angular/material';
import { FormsModule } from "@angular/forms";
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ListService } from './list.service';
import { HttpClientModule } from '@angular/common/http'



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Body1Component,
    Body2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    FormsModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    MatButtonModule

  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
