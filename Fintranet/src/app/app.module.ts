import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http'
import { HomeComponent } from './home/home.component';
import { filerSearchReducer , UsersReducer ,filersReducer } from './state';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    MenuModule,
    MenubarModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ users: UsersReducer , search:filerSearchReducer, filters: filersReducer }, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
