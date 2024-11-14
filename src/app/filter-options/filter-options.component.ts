import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter-options',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filter-options.component.html',
  styleUrls: ['./filter-options.component.css']
})
export class FilterOptionsComponent {
  subject: string = 'English';
  condition: string = 'Above';
  value1: number = 0;
  value2: number = 0;

  @Output() filterApplied = new EventEmitter<{ subject: string, condition: string, value1: number, value2: number }>();
  @Output() filterCleared = new EventEmitter<void>();

  applyFilter() {
    this.filterApplied.emit({ subject: this.subject, condition: this.condition, value1: this.value1, value2: this.value2 });
  }

  clearFilter() {
    this.filterCleared.emit();
  }
}



