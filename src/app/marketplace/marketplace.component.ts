import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Listing } from '../listing.model';
import { ListingService } from '../listing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css'],
  providers: [ListingService]
})
export class MarketplaceComponent implements OnInit {
  listings: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private listingService: ListingService){}

  ngOnInit(){
    this.listings = this.listingService.getListings();
  }

  goToDetailPage(clickedListing) {
    this.router.navigate(['listings', clickedListing.$key]);
  }

}
