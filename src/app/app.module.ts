import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgSelectModule } from '@ng-select/ng-select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { UsersListComponent } from './components/users-list/users-list.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { gitHubSearchReducer } from './store/store';
import {EffectsModule} from '@ngrx/effects'
import { githubSearchEffect } from './store/effects/GitHubSearch.effect';



@NgModule({
  declarations: [
    AppComponent , 
    UsersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule ,
    CommonModule,
    HttpClientModule,
    NgSelectModule,
    FormsModule,
    StoreModule.forRoot({usersStore : gitHubSearchReducer}),
    EffectsModule.forRoot([githubSearchEffect]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
