import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Listing } from '../listing.model';
import { ListingService } from '../listing.service';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css'],
  providers: [ListingService]
})
export class ListingComponent implements OnInit {
  listingId: string;
  listingtoDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private listingService: ListingService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.listingId = (urlParameters['id']);
    });
    this.listingtoDisplay = this.listingService.getListingById(this.listingId);
  }

}
