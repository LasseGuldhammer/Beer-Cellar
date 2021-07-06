import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/shared/services/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('username') private _usernameElement: any
  @ViewChild('password') private _passwordElement: any

  public errorCode: string = ''
  public errorMessage: string = ''

  constructor(
    private _firebaseService: FirebaseService,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  signInWithEmailAndPassword(): void {
    const username = this._usernameElement.nativeElement.value
    const password = this._passwordElement.nativeElement.value
    this._firebaseService.signInWithEmailAndPassWord(username, password)
      .catch((error) => {
        this.errorCode = error.code
        this.errorMessage = error.message
      })
    this._firebaseService.user$.subscribe((response) => {
      if (response !== null) {
        this._router.navigate(['/'])
      }
    })
  }

  signInWithGoogle(): void {
    this._firebaseService.signInWithGoogle()
  }

  signInWithFacebook() {
    this._firebaseService.signInWithFacebook()
  }

}
