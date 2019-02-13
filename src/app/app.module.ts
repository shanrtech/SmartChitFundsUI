import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { LoginComponent } from './login/login.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { CreateChitComponent } from './chit/create-chit/create-chit.component';
import { ViewChitComponent } from './chit/view-chit/view-chit.component';
import { ProfileComponent } from './profile/profile.component';
import { DemoComponent } from './demo/demo.component';
import { CreateMemberComponent } from './chit/member/create-member/create-member.component';
import { ViewMemberComponent } from './chit/member/view-member/view-member.component';
import { MemberComponent } from './chit/member/member/member.component';
import { BidComponent } from './chit/member/bid/bid.component';
import { ChitsComponent } from './chit/member/chits/chits.component';
import { TabsModule } from 'ngx-bootstrap';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScfService } from './service/scf.service';
import { HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from './layout/layout.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    MenuComponent,
    MaincontentComponent,
    LoginComponent,
    CopyrightComponent,
    CreateChitComponent,
    ViewChitComponent,
    ProfileComponent,
    DemoComponent,
    CreateMemberComponent,
    ViewMemberComponent,
    MemberComponent,
    BidComponent,
    ChitsComponent,
    RegisterComponent,
    LayoutComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,    
    HttpClientModule,
    TabsModule.forRoot()
  ],
  providers: [ScfService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
