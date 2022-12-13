import { Component } from '@angular/core';
// this import is causing the issue
// import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import * as firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'chatApp';
  messageRecArray: FirestoreRec[] = [];

  // https://reactgo.com/check-local-storage-key-exists-js/#:~:text=The%20localStorage.getItem%20%28%29%20method%20takes%20the%20key%20as,else%20block%20statement%20if%20a%20key%20doesn%E2%80%99t%20exist.
  // Naming vars
  userName: string = localStorage.getItem('userName')!;
  color: string = localStorage.getItem('color')!;
  message: string = ' ';

  constructor(private firestore: AngularFirestore) {
    this.getMessages().subscribe((result) => (this.messageRecArray = result));
  }

  getMessages(): Observable<FirestoreRec[]> {
    return this.firestore
      .collection<FirestoreRec>('messages', (ref) => ref.orderBy('timestamp'))
      .valueChanges();
  }

  sendMessage(): void {
    this.firestore.collection<FirestoreRec>('messages').add({
      userName: this.userName,
      message: this.userName + ': ' + this.message,
      timestamp: new firebase.default.firestore.Timestamp(Date.now() / 1000, 0),
      color: this.color,
    });
    this.message = '';
  }

  saveName() {
    localStorage.setItem('userName', this.userName);
  }
  saveColor() {
    localStorage.setItem('color', this.color);
  }
}

export interface FirestoreRec {
  userName: string;
  message: string;
  timestamp: firebase.default.firestore.Timestamp;
  color?: string;
}
