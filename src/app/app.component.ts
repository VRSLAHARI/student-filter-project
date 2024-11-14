import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StudentListComponent } from './student-list/student-list.component';
import { FilterOptionsComponent } from './filter-options/filter-options.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    StudentListComponent,
    FilterOptionsComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild(StudentListComponent) studentListComponent!: StudentListComponent;

  ngAfterViewInit() {}

  applyFilter(filterData: { subject: string, condition: string, value1: number, value2: number }) {
    this.studentListComponent.filteredStudents = this.studentListComponent.students.filter(student => {
      const studentScore = +student[filterData.subject as keyof typeof student]; // Adding '+' to convert to number
      if (filterData.condition === 'Above') {
        return studentScore > filterData.value1;
      } else if (filterData.condition === 'Below') {
        return studentScore < filterData.value1;
      } else if (filterData.condition === 'Between') {
        return studentScore >= filterData.value1 && studentScore <= filterData.value2;
      }
      return false;
    });
  }

  clearFilter() {
    this.studentListComponent.filteredStudents = this.studentListComponent.students;
  }
}





