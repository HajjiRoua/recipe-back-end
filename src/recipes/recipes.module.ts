import { Module } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { RecipesController } from './recipes.controller';
import { RecipeEntity } from './entities/recipe.entity';
import {TypeOrmModule} from "@nestjs/typeorm";
import { FeedbackModule } from 'src/feedback/feedback.module';
import { UserModule } from 'src/user/user.module';

@Module({
  imports:[TypeOrmModule.forFeature([RecipeEntity]),FeedbackModule],
  controllers: [RecipesController],
  providers: [RecipesService]
})
export class RecipesModule {}
