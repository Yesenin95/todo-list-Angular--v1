import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Task {
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports:[FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: Task[] = [];
  newTask: string = '';

  addTask() {
    if (this.newTask.trim() !== '') {
      const task: Task = {
        title: this.newTask,
        completed: false
      };
      this.tasks.push(task);
      this.newTask = '';
    }
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

  deleteAllTasks() {
    this.tasks = [];
  }

  deleteCompletedTasks() {
    this.tasks = this.tasks.filter(task => !task.completed);
  }

  moveTaskUp(index: number) {
    if (index > 0) {
      this.swapTasks(index, index - 1);
    }
  }

  moveTaskDown(index: number) {
    if (index < this.tasks.length - 1) {
      this.swapTasks(index, index + 1);
    }
  }

  swapTasks(indexA: number, indexB: number) {
    const temp = this.tasks[indexA];
    this.tasks[indexA] = this.tasks[indexB];
    this.tasks[indexB] = temp;
  }
}
