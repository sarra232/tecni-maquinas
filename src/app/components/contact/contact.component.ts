import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  formData = {
    name: '',
    organization: '',
    help: '',
    email: '',
    phone: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  submitForm() {
    // Here, you can handle the form submission logic
    // For this example, we'll just log the form data
    console.log(this.formData);
  }

}
