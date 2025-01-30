import { Component, inject, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { Employee } from '../../interfaces/employee';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SearchPipe } from '../../search.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  imports: [FormsModule, CommonModule, SearchPipe],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit{

  private httpService = inject(HttpService)
  router = inject(Router)

  employees:Employee[] = [{
    date:'',
    name:'',
    id:0
  }]

  searchProperty = '';
  searchValue = '';

  ngOnInit(): void {
    this.httpService.getEmployee().subscribe({
      next: (data) => {
        console.log(data)
        this.employees = data
      },
      error: (error) => console.error('Error:', error),
    })

  }

  search(property: string) {
    console.log(property);

    this.searchProperty = property;
  }

}
