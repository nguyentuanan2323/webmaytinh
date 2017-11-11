import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {appRoutes} from '../routers';
import { AppComponent } from './app.component';
import { Error404Component } from './error404/error404.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { ItemSubjectComponent } from './item-subject/item-subject.component';
import { RecentpostsComponent } from './recentposts/recentposts.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import {RouterModule} from '@angular/router';
import { SubjectComponent } from './subject/subject.component';
import { FooterComponent } from './footer/footer.component';
import { TipsComponent } from './tips/tips.component';
import { NetworkComponent } from './network/network.component';
import { SoftwareComponent } from './software/software.component';
import { HardwareComponent } from './hardware/hardware.component';
import { ArticleComponent } from './articleitem/article.component';
import { TexttitleComponent } from './texttitle/texttitle.component';
import { DetailComponent } from './detail/detail.component';
import { ItemComponent } from './item/item.component';
import { HttpModule } from '@angular/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
    HeaderComponent,
    NavComponent,
    ItemSubjectComponent,
    RecentpostsComponent,
    HomeComponent,
    AdminComponent,
    SubjectComponent,
    FooterComponent,
    TipsComponent,
    NetworkComponent,
    SoftwareComponent,
    HardwareComponent,
    ArticleComponent,
    TexttitleComponent,
    DetailComponent,
    ItemComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
      HttpModule,
      NgxPaginationModule,
      RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
