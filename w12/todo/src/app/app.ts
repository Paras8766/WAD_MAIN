import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  newTask = '';
  tasks: string[] = [];
  editIndex: number | null = null;
  editTask = '';

  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push(this.newTask.trim());
      this.newTask = '';
    }
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

  startEdit(index: number) {
    this.editIndex = index;
    this.editTask = this.tasks[index];
  }

  saveEdit() {
    if (this.editIndex !== null && this.editTask.trim()) {
      this.tasks[this.editIndex] = this.editTask.trim();
      this.editIndex = null;
      this.editTask = '';
    }
  }
}