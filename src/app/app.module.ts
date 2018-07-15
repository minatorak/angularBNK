import { TokenInterceptorService } from './interceptors/token-interceptor.service';
import { AdminComponent } from './components/admin/admin.component';
import { BnkGirlListComponent } from './components/bnk-girl-list/bnk-girl-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { MemberInformationComponent } from './components/member-information/member-information.component';
import { AuthGuard } from './guard/auth.guard';



const routes: Route[] = [
  {path: '', pathMatch: 'full', redirectTo: '/dashboard'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'instagram/:instagramId', component: InstagramComponent},
  {path: 'login', component: LoginComponent },
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
  {path: 'admin/edit/:Id', component: MemberInformationComponent, canActivate: [AuthGuard]},
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
    LoginComponent,
    AdminComponent,
    MemberInformationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
