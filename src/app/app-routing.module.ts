import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {GuidesComponent} from './guides/guides.component';
import {ForumsComponent} from './forums/forums.component';
import {ChatroomsComponent} from './chatrooms/chatrooms.component';
import {AboutUsComponent} from './about-us/about-us.component';
import { CategoryComponent } from './category/category.component';
import { GuideComponent } from './guide/guide.component';
import { ForumComponent } from './forum/forum.component';
import { ThreadComponent } from './thread/thread.component';

const routes: Routes = [{path: '', component: HomeComponent},
                        {path: 'Login', component: LoginComponent},
                        {path: 'Guides', component: GuidesComponent},
                        {path: 'Forums', component: ForumsComponent},
                        {path: 'Chatrooms', component: ChatroomsComponent},
                        {path: 'AboutUs', component: AboutUsComponent},
                        {path: 'Category', component: CategoryComponent},
                        {path: 'Guide', component: GuideComponent},
                        {path: 'Forum', component: ForumComponent},
                        {path: 'Thread', component: ThreadComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
