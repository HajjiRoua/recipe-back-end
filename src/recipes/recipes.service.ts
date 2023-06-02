import { Injectable } from '@nestjs/common';
import { RecipeEntity } from './entities/recipe.entity';
import { RecipeDto } from './dto/recipe.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RecipesService {

  constructor(
    @InjectRepository(RecipeEntity)
    private recipeRepository : Repository<RecipeEntity>
) {
}

  httpService: any;
  recipe : RecipeDto[]= [
    { id: 1, Title: 'Pasta Carbonara', Ingredients: ['Spaghetti', 'Bacon', 'Eggs', 'Parmesan Cheese', 'Black Pepper'] },
    { id: 2, Title: 'Chicken Stir-Fry', Ingredients: ['Chicken Breast', 'Bell Peppers', 'Onions', 'Soy Sauce', 'Garlic', 'Ginger'] },
    { id: 3, Title: 'Caprese Salad', Ingredients: ['Tomatoes', 'Mozzarella Cheese', 'Basil Leaves', 'Olive Oil', 'Balsamic Vinegar'] },
    { id: 4, Title: 'Pasta Carbonara', Ingredients: ['Spaghetti', 'Bacon', 'Eggs', 'Parmesan Cheese', 'Black Pepper'] },
    { id: 5, Title: 'Pasta Carbonara', Ingredients: ['Spaghetti', 'Bacon', 'Eggs', 'Parmesan Cheese', 'Black Pepper'] },
    { id: 6, Title: 'Pasta Carbonara', Ingredients: ['Spaghetti', 'Bacon', 'Eggs', 'Parmesan Cheese', 'Black Pepper'] },
  ];

  async getAllRecipes(limit: number): Promise<RecipeDto[]> {

    return this.recipeRepository.find()
    }


    async searchRecipes(query: string): Promise<RecipeEntity[]> {
      const recipes = await this.recipeRepository
        .createQueryBuilder('recipe')
        .where('recipe.title ILIKE :query', { query: `%${query}%` })
        .orWhere('recipe.ingredients::text[] @> ARRAY[:query]', { query })
        .getMany();
  
      return recipes;
    }
  

  // create(createRecipeDto: CreateRecipeDto) {
 
  //   return 'This action adds a new recipe';
  // }

  findOne(id: number) {
    return `This action returns a #${id} recipe`;
  }

}
