import { BnkGirlListComponent } from './components/bnk-girl-list/bnk-girl-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Route } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BnkGirlComponent } from './components/bnk-girl/bnk-girl.component';
import { InstagramComponent } from './components/instagram/instagram.component';
import { InstagramListComponent } from './components/instagram-list/instagram-list.component';
import { InstagramItemComponent } from './components/instagram-item/instagram-item.component';
import { BnkSuffixPipe } from './pipes/bnk-suffix.pipe';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Route[] = [
  {path: '', pathMatch: 'full', redirectTo: '/dashboard'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'instagram/:instagramId', component: InstagramComponent},
  {path: 'login', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BnkGirlListComponent,
    BnkGirlComponent,
    InstagramComponent,
    InstagramListComponent,
    InstagramItemComponent,
    BnkSuffixPipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
