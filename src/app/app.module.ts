import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreModule } from '@angular/fire/compat/firestore/';
import { AppComponent } from './app.component';

const firebaseConfig = {
  apiKey: "AIzaSyCLzywGDLMBCudeMJsLdRzuSWOhGJwF6Rc",
  authDomain: "landing-page-3e0c0.firebaseapp.com",
  projectId: "landing-page-3e0c0",
  storageBucket: "landing-page-3e0c0.appspot.com",
  messagingSenderId: "164825223555",
  appId: "1:164825223555:web:fd926ef412d9071f4f66b6",
  measurementId: "G-9PVERCY7CS"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
