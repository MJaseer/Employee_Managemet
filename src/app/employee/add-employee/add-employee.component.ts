import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-add-employee',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {

  private formBuilder = inject(FormBuilder)
  private http = inject(HttpService)

  isSubmitted = false;
  passWordErr = '';

  employeeForm = this.formBuilder.group({
    name: ['', Validators.required],
    phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
    email: ['', [Validators.required, Validators.email]],
    address: ['', Validators.required]
  });

  addProduct() {
    this.isSubmitted = true;

    if (this.employeeForm.invalid) {
      Swal.fire({
        title: 'Employee data is invalid',
        icon: 'warning',
      });
      return;
    } else {
      console.log(this.employeeForm.value);

      const data = this.employeeForm.value
      debugger

      this.http.addEmployee(data).subscribe({
        next: (res) => { console.log(res) },
        error: (err) => { console.log(err) }
      })
    }
  }

}
