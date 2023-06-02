import { IsNumber, IsString, IsArray, ArrayNotEmpty } from 'class-validator';

export class RecipeDto {
  @IsNumber()
  id: number;

  @IsString()
  Title: string;

  @IsArray()
  @ArrayNotEmpty()
  Ingredients: string[];

//   constructor(id: number, title: string, ingredients: string[]) {
//     this.id = id;
//     this.Title = title;
//     // this.ingredients = ingredients;
//   }
}
