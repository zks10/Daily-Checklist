import { Injectable } from "@angular/core";
import { NewTaskData } from "./task/task.model";

@Injectable({providedIn: 'root'})
export class TasksService {
  private tasks = [
      {
        id: 't1',
        userId: 'u1',
        title: 'Master Angular',
        summary: 'Learn Angular',
        dueDate: '2024-08-30'
      },
      {
        id: 't2',
        userId: 'u1',
        title: 'Master Fast Api',
        summary: 'Learn Fast Api',
        dueDate: '2024-09-02'
      },
      {
        id: 't3',
        userId: 'u3',
        title: 'Scrapper',
        summary: 'Build best video collection',
        dueDate: '2024-09-31'
      },
      {
        id: 't4',
        userId: 'u4',
        title: 'Scrapper',
        summary: 'Build best video collection',
        dueDate: '2024-09-31'
      }
  ];

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((t) => t.userId === userId);
  }

  addTask(taskData: NewTaskData, userId: string) {
    this.tasks.unshift({
        id: new Date().getTime().toString(),
        userId: userId,
        title: taskData.title,
        summary: taskData.summary,
        dueDate: taskData.date
    });
    this.saveTasks()
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks()
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
  }
}