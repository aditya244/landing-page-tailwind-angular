import { Component, ElementRef, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'landing-page';
  contactForm!: FormGroup;
  isSubmit = true;
  submitFailed: boolean = false;
  submitMessage= '';

  private firebaseForm!: AngularFirestoreCollection<any>;

  constructor( private elementRef: ElementRef,
    private formBuiler: FormBuilder,
    private fireStore: AngularFirestore,
    ) {
  }

  ngOnInit(): void {

    this.firebaseForm = this.fireStore.collection('enquiry');

    this.contactForm = this.formBuiler.group({
      name:[null, Validators.required,],
      email: [null, [Validators.required, Validators.email]],
      message: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(150)]]
    })
  }

  scrollInternaNavigation(selector: any) {
    const el = this.elementRef.nativeElement.querySelector(selector);
    el.scrollIntoView({behavior: 'smooth', block: 'start'});
  }

  submitData(value: any) {
    this.firebaseForm.add({...value}).then((res: any) => {
      this.submitMessage = 'Sumitted Successfully';
      this.isSubmit = true;
      console.log(res, 'Response')
    })
    .catch((err: any) => {
      this.submitFailed = true;
      this.isSubmit = false;
      console.log(err)
    })
    setTimeout( () => {
      this.isSubmit = false;
      this.submitFailed = false;
    }, 10000);
    }

}
