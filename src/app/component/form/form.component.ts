import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressBookModule } from 'src/app/model/address-book/address-book.module';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  cancel="./assets/images/cross.jpeg";

  contact: AddressBookModule = new AddressBookModule("","","","","","","")

  constructor() {  

   }

  ngOnInit(): void {
  }
  
  onSubmit(){
    console.log(this.contact);
  }

}
