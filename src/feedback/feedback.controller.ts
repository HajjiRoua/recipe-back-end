import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { get } from 'http';
import { CreateFeedbackDto } from './DTO/create-feedback.dto';

@Controller('feedback')
export class FeedbackController {
    constructor(private readonly feedbackService: FeedbackService) {}


    @Get('recipe/:id')
    getFeedbackByRecipeId(@Param('id') id: number) {
      return this.feedbackService.getFeedbackByRecipeId(id);
    }
    
    @Post(':recipeId')
    createFeedback(
      @Param('recipeId') recipeId: number,
      @Body() createFeedbackDto: CreateFeedbackDto,
    ) {
      return this.feedbackService.createFeedback(recipeId, createFeedbackDto);
    }

}
