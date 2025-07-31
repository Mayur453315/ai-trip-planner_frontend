import { Component, Input, OnChanges } from '@angular/core';
import { PackingListService } from '../../services/packing-list.service';

@Component({
  selector: 'app-packing-list',
  templateUrl: './packing-list.component.html',
  styleUrls: ['./packing-list.component.css']
})
export class PackingListComponent implements OnChanges {

  @Input() weatherData: any;
  packingItems: string[] = [];

  constructor(private packingService: PackingListService) {}

  ngOnChanges(): void {
    if (this.weatherData) {
      this.packingItems = this.packingService.generatePackingList(this.weatherData);
    }
  }
}
