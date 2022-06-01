import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from '../entities/task.entity';
import { CreateTaskDTO } from './DTO/task.dto';
import { InsertResult } from 'typeorm';

@Controller('task')
export class TaskController {
  constructor(private readonly service: TaskService) {}

  @Get()
  async getTaskList(): Promise<Task[]> {
    return await this.service.findAll();
  }

  @Post()
  async addTask(@Body() task: CreateTaskDTO): Promise<InsertResult> {
    return await this.service.create(task);
  }

  @Get(':id')
  async getTask(@Param('id') id: string): Promise<Task> {
    return await this.service.find(Number(id));
  }
}
