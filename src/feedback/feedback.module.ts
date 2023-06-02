import { Module } from '@nestjs/common';
import { FeedbackController } from './feedback.controller';
import { FeedbackService } from './feedback.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedbackEntity } from './entities/feedback.entity';
import { UserModule } from 'src/user/user.module';
import { RecipesModule } from 'src/recipes/recipes.module';

@Module({
  imports:[TypeOrmModule.forFeature([FeedbackEntity]),UserModule,RecipesModule],
  controllers: [FeedbackController],
  providers: [FeedbackService]
})
export class FeedbackModule {}
