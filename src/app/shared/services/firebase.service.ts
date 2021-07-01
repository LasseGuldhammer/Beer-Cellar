import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore'
import { AngularFireAuth } from '@angular/fire/auth';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private _usersSource = new Subject<any>()
  public users$ = this._usersSource.asObservable()

  constructor(
    private _firestore: AngularFirestore,
    private _fireAuth: AngularFireAuth
  ) {
    this._firestore.collection('users').valueChanges().subscribe((response) => {
      console.log('response', response)
      this._usersSource.next(response)
    })
  }

  signInWithEmailAndPassWord(email: string, password: string) {
    this._fireAuth.signInWithEmailAndPassword(email, password)
  }
}
