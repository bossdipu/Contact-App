import { Component, OnInit } from '@angular/core';
import { MyContact } from '../models/myContact';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-contact-dash',
  templateUrl: './contact-dash.component.html',
  styleUrls: ['./contact-dash.component.scss']
})
export class ContactDashComponent implements OnInit {
  public loading: boolean = false;
  public contacts: MyContact[] = [];
  public errorMessage: string | null = null;

  constructor(private cantService: ApiService) { }

  ngOnInit(): void {
    this.loading = true;
    this.cantService.getAllContacts().subscribe((data:MyContact[])=>{
      this.contacts = data;
      this.loading = false;
    }, (error)=> {
      this.errorMessage = error;
      this.loading = false;
    })
  }

}
