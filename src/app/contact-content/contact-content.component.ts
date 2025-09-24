import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-content',
  templateUrl: './contact-content.component.html',
  styleUrl: './contact-content.component.css'
})
export class ContactContentComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private toastr: ToastrService) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userEmail: ['', [Validators.required, Validators.email]],
      messageContent: ['', [Validators.required, Validators.maxLength(200)]],
    });
  }
  onSubmit() {
    if (this.contactForm.valid) {
      this.http.post('https://charlie-lobe-portfolio-fshacedhhjd5hmb5.canadacentral-01.azurewebsites.net/api/sendEmail', this.contactForm.value).subscribe({
        next: () => {
          this.toastr.success('Email sent successfully!');
          this.contactForm.reset(); // Clear the form
        },
   error: (err) => {
       if (err.error && err.error.status === 'error') {
           this.toastr.error(err.error.message); // Display the error message returned from backend
       } else {
           this.toastr.error('Error sending email: ' + err.message);
       }
   }
      });
    }
  }
}