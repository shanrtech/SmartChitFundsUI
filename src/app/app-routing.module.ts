import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { CreateChitComponent } from './chit/create-chit/create-chit.component';
import { ViewChitComponent } from './chit/view-chit/view-chit.component';
import { MemberComponent } from './chit/member/member/member.component';
import { CreateMemberComponent } from './chit/member/create-member/create-member.component';
import { ViewMemberComponent } from './chit/member/view-member/view-member.component';
import { BidComponent } from './chit/member/bid/bid.component';
import { ChitsComponent } from './chit/member/chits/chits.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';


const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path: 'layout', component: LayoutComponent,
    children: [

      {
        path: '', component: HomeComponent
      },
      {
        path: 'profile', component: ProfileComponent
      },
      {
        path: 'createchit', component: CreateChitComponent
      },
      {
        path: 'chits', component: ViewChitComponent
      },
      {
        path: 'members', component: MemberComponent,
        children: [
          {
            path: 'createMember',
            component: CreateMemberComponent
          },
          {
            path: 'viewMember/:chitId',
            component: ViewMemberComponent
          }
        ]
      },
      {
        path: 'memberChits',
        component: ChitsComponent
      },
      {
        path: 'bidChit',
        component: BidComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
