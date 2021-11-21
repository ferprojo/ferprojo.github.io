import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { GuidesComponent } from './guides/guides.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { ForumsComponent } from './forums/forums.component';
import { ChatroomsComponent } from './chatrooms/chatrooms.component';
import { AboutUsComponent } from './about-us/about-us.component';

import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { CategoryComponent } from './category/category.component';
import { GuideComponent } from './guide/guide.component';
import { ForumComponent } from './forum/forum.component';
import { ThreadComponent } from './thread/thread.component';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    GuidesComponent,
    ForumsComponent,
    ChatroomsComponent,
    AboutUsComponent,
    CategoryComponent,
    GuideComponent,
    ForumComponent,
    ThreadComponent
  ],
  imports: [
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDH79fh2gbGeYEN6VC43shdc7FpPexsSaQ",
      authDomain: "frontendpia.firebaseapp.com",
      databaseURL: "https://frontendpia-default-rtdb.firebaseio.com",
      projectId: "frontendpia",
      storageBucket: "frontendpia.appspot.com",
      messagingSenderId: "773625939640",
      appId: "1:773625939640:web:94290c8b099b823887164d"
    }),
    provideFirestore(() => getFirestore()),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatListModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
