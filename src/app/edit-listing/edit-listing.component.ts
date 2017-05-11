import { Component, OnInit, Input } from '@angular/core';
import { Listing } from '../listing.model';
import { ListingService } from '../listing.service';

@Component({
  selector: 'app-edit-listing',
  templateUrl: './edit-listing.component.html',
  styleUrls: ['./edit-listing.component.css'],
  providers: [ListingService]
})
export class EditListingComponent implements OnInit {
  @Input() selectedListing;

  constructor(private listingService: ListingService) { }

  ngOnInit() {
  }

  beginUpdatingListing(listingToUpdate) {
    this.listingService.updateListing(listingToUpdate);
  }

  beginDeletingListing(listingToDelete) {
    if(confirm("Realy delete this listing?")){
      this.listingService.deleteListing(listingToDelete);
    }
  }

}
