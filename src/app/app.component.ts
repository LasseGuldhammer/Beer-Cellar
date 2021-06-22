import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'beer-cellar';

  constructor(
    private _firestore: AngularFirestore
  ) {
    this._firestore.collection('users').valueChanges().subscribe((response) => {
      console.log('response', response)
    })
  }
}
