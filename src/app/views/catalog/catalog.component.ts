import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from 'src/app/shared/services/load-scripts.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  constructor( private name: LoadScriptsService) {
    this.name.LoadCatalog(["tabs"]);
  }

  ngOnInit(): void {
  }

}
