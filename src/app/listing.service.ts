import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Listing } from './listing.model'

@Injectable()
export class ListingService {
  listings: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.listings = database.list('listings');
  }

  getListings(){
    return this.listings;
  }

  addListing(newListing: Listing) {
    this.listings.push(newListing);
  }

  getListingById(listingId: string){
    return this.database.object('listings/' + listingId);
  }

}
