import { Component, OnInit } from '@angular/core';
import { Report } from 'src/app/shared/classes/report';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public report: Report;

  constructor() {
    this.report = new Report();
   }

  ngOnInit(): void {
  }

  public submit(): void {
    
  }

}
