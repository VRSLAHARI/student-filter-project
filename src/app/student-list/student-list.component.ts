import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { STUDENTS } from '../student-data';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
  students = STUDENTS;
  filteredStudents = STUDENTS;

  sortBy(field: keyof typeof STUDENTS[number]) {
    this.filteredStudents.sort((a, b) => a[field] > b[field] ? 1 : -1);
  }
}




