import { Component } from '@angular/core';
import { FirebaseService } from './shared/services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'beer-cellar';
  users: any

  constructor(
    private _firebaseService: FirebaseService
  ) {
    this._firebaseService.users$.subscribe((response) => {
      this.users = response
      console.log('users', response)
    })
    this._firebaseService.user$.subscribe((response) => {
      console.log('user', response)
    })
  }
}
