import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { MaincontentComponent } from './user-dashboard/maincontent/maincontent.component';
import { AdminHeaderComponent } from './admin-dashboard/admin-header/admin-header.component';
import { AdminMaincontentComponent } from './admin-dashboard/admin-maincontent/admin-maincontent.component';
import { AdminSidebarComponent } from './admin-dashboard/admin-sidebar/admin-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    FooterComponent,
    MaincontentComponent,
    AdminHeaderComponent,
    AdminMaincontentComponent,
    AdminSidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
