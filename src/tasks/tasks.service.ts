import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(id: string): Task {
    return this.tasks.find((a) => a.id === id);
  }

  deleteTaskById(id: string): void {
    this.tasks = this.tasks.filter((a) => a.id !== id);
  }

  createTask(createTaskDto: CreateTaskDto): Task {
    const task: Task = {
      id: uuid(),
      status: TaskStatus.OPEN,
      ...createTaskDto,
    };

    this.tasks.push(task);
    return task;
  }
}
