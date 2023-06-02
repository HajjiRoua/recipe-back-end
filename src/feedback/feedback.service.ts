import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RecipeEntity } from 'src/recipes/entities/recipe.entity';
import { Repository } from 'typeorm';
import { FeedbackEntity } from './entities/feedback.entity';
import { CreateFeedbackDto } from './DTO/create-feedback.dto';

@Injectable()
export class FeedbackService {
    

      constructor(
        @InjectRepository(FeedbackEntity)
        private readonly feedbackRepository: Repository<FeedbackEntity>,
        @InjectRepository(RecipeEntity)
        private readonly recipeRepository: Repository<RecipeEntity>,
      ) {}
    
      async getFeedbackByRecipeId(recipeId: number) {
        return this.recipeRepository.find({ where: { id: recipeId } });
      }

      async createFeedback(recipeId: number, createFeedbackDto: CreateFeedbackDto) {
        const recipe = await this.recipeRepository.findOne({ where: { id: recipeId } });
        if (!recipe) {
          throw new Error('Recipe not found');
        }
    
        const feedback = new FeedbackEntity();
        feedback.recipeId = recipeId;
        feedback.userId = createFeedbackDto.userId;
        feedback.comment = createFeedbackDto.comment;
        feedback.imageUrl = createFeedbackDto.imageUrl;
    
        return this.feedbackRepository.save(feedback);
      }

}
