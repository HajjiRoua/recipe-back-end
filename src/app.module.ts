import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipesModule } from './recipes/recipes.module';
import { RecipesController } from './recipes/recipes.controller';
import { RecipesService } from './recipes/recipes.service';
import {ConfigModule} from "@nestjs/config";
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecipeEntity } from './recipes/entities/recipe.entity';
import { FeedbackModule } from './feedback/feedback.module';
import { IngredientModule } from './ingredient/ingredient.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ConfigModule.forRoot(
    {
      isGlobal : true
    }
),
TypeOrmModule.forRoot({
type: 'mysql',
host: 'localhost',
port: 3306,
username: 'root',
password: "",
database: 'recipe-back',
entities: [RecipeEntity],
synchronize: true,
}),
RecipesModule,
FeedbackModule,
IngredientModule,
UserModule],
  controllers: [AppController, RecipesController],
  providers: [ RecipesService],
})
export class AppModule {}
