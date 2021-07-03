import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'
import { AngularFireAuth } from '@angular/fire/auth';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private _usersSource = new Subject<any>()
  public users$ = this._usersSource.asObservable()

  private _userSource = new Subject<any>()
  public user$ = this._userSource.asObservable()

  constructor(
    private _firestore: AngularFirestore,
    private _fireAuth: AngularFireAuth
  ) {
    this._firestore.collection('users').valueChanges().subscribe((response) => {
      this._usersSource.next(response)
    })
    this._fireAuth.user.subscribe((response) => {
      this._userSource.next(response)
    })
  }

  signInWithEmailAndPassWord(email: string, password: string) {
    return this._fireAuth.signInWithEmailAndPassword(email, password)
  }
}
