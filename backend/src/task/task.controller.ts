import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './task.entity';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  createTask(@Body('title') title: string, @Body('description') description: string): Promise<Task> {
    return this.taskService.createTask(title, description);
  }

  @Get()
  getAllTasks(): Promise<Task[]> {
    return this.taskService.getAllTasks();
  }

  @Put(':id')
  updateTask(
    @Param('id') id: number,
    @Body('title') title: string,
    @Body('description') description: string,
    @Body('status') status: string,
  ): Promise<Task> {
    return this.taskService.updateTask(id, title, description, status);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: number): Promise<void> {
    return this.taskService.deleteTask(id);
  }
}
