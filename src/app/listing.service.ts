import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ListingService {
  listings: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.listings = database.list('listings');
  }

  getListings(){
    return this.listings;
  }

}
