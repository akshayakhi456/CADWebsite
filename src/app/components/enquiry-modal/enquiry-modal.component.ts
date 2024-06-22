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
import { CommonModule } from '@angular/common';

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
    CommonModule
  ],
  templateUrl: './enquiry-modal.component.html',
  styleUrl: './enquiry-modal.component.scss'
})
export class EnquiryModalComponent {
  readonly dialogRef = inject(MatDialogRef<EnquiryModalComponent>);
  readonly data = inject<any>(MAT_DIALOG_DATA);
  readonly service = inject(ImagesService);
  dialog = inject(MatDialog);
  courses = [
    'Civil CAD',
    'Mechanical CAD',
    'Electrical CAD',
    'BIM',
    'Project Management',
    'Architecture CAD',
  ]
  enquiryForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    mobileNumber: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    course: new  FormControl('', Validators.required)
  });
  
  get f() {
    return this.enquiryForm.controls;
  }

  ngOnInit(): void {
    this.enquiryForm.patchValue({
      course: this.data.course
    })
  }

  submitResponse(): void {
    this.enquiryForm.markAllAsTouched();
    if (this.enquiryForm.invalid) {
      return;
    }

    this.service.addEnquiryForm(this.enquiryForm.value).subscribe({
      next: () =>{
        this.dialog.closeAll();
      }
    });
  }

}
