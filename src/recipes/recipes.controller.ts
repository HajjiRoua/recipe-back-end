import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { RecipeEntity } from './entities/recipe.entity';
import { RecipeDto } from './dto/recipe.dto';

@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipeService: RecipesService) {}


  @Get()
  async getAllRecipes(@Query('limit') limit: number): Promise<RecipeDto[]> {
    const defaultLimit = 20;
    return this.recipeService.getAllRecipes(limit || defaultLimit);
  }

  @Get('search')
  async searchRecipes(@Query('q') query: string): Promise<RecipeDto[]> {
    const recipes = await this.recipeService.searchRecipes(query);
    return recipes;
  }

}
