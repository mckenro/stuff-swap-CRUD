import { Component, OnInit } from '@angular/core';
import { ListingService } from '../listing.service';
import { Listing } from '../listing.model';
import { ListingComponent } from '../listing/listing.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ListingService]
})
export class AdminComponent implements OnInit {

  constructor(private listingService: ListingService) { }

  ngOnInit() {
  }

  submitForm(title: string, description: string, price: number, city: string, state: string, zip: number, condition: string, image: string) {
    var newListing: Listing = new Listing(title, description, price, city, state, zip, condition, image);
    this.listingService.addListing(newListing);
  }

}
