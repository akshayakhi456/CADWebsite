import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule, AbstractControl } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ImagesService } from '../../services/images.service';

@Component({
  selector: 'app-enquiry-modal',
  standalone: true,
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
  templateUrl: './enquiry-modal.component.html',
  styleUrl: './enquiry-modal.component.scss'
})
export class EnquiryModalComponent {
  readonly dialogRef = inject(MatDialogRef<EnquiryModalComponent>);
  readonly data = inject<any>(MAT_DIALOG_DATA);
  readonly service = inject(ImagesService);
  enquiryForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    mobileNumber: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    course: new  FormControl('', Validators.required)
  });
  
  get f() {
    return this.enquiryForm.controls;
  }

  submitResponse(): void {
    this.enquiryForm.markAllAsTouched();
    if (this.enquiryForm.invalid) {
      return;
    }

    this.service.addEnquiryForm(this.enquiryForm.value).subscribe();
  }

}
