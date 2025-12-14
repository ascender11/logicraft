import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { CurrentUser } from 'src/auth/strategy/jwt.strategy';
import { User } from 'src/decorators/user.decorator';

import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { ProjectsService } from './projects.service';

@UseGuards(JwtAuthGuard)
@Controller('projects')
export class ProjectsController {
  constructor(private projectsService: ProjectsService) {}

  @Get()
  findByUser(@User() user: CurrentUser) {
    return this.projectsService.findByUser(user.id);
  }

  @Get(':projectId')
  findOne(@Param('projectId') id: string, @User() user: CurrentUser) {
    return this.projectsService.findOne(id, user.id);
  }

  @Post()
  create(@Body() dto: CreateProjectDto, @User() user: CurrentUser) {
    return this.projectsService.create(dto, user.id);
  }

  @Patch(':projectId')
  update(
    @Param('projectId') id: string,
    @Body() dto: UpdateProjectDto,
    @User() user: CurrentUser,
  ) {
    return this.projectsService.update(id, dto, user.id);
  }

  @Delete(':projectId')
  remove(@Param('projectId') id: string, @User() user: CurrentUser) {
    return this.projectsService.remove(id, user.id);
  }
}
