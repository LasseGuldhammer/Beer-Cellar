import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Component({
  selector: 'app-frontpage-view',
  templateUrl: './frontpage-view.component.html',
  styleUrls: ['./frontpage-view.component.scss']
})
export class FrontpageViewComponent implements OnInit {

  constructor(
    public fireAuth: AngularFireAuth
  ) {}

  ngOnInit(): void {
  }

  login() {
    this.fireAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
    this.fireAuth.signOut();
  }

}
