import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from 'src/app/shared/services/load-scripts.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor( private name: LoadScriptsService) {
    this.name.LoadUs(["tabs", "slider-present", "slider-beginning"]);
  }

  ngOnInit(): void {
  }

}