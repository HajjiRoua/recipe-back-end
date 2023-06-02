import { NestFactory } from "@nestjs/core";
import { AppModule } from "../app.module";
import {UserService} from "../user/user.service";

import { RecipesService } from "src/recipes/recipes.service";
import { FeedbackService } from "src/feedback/feedback.service";

async function bootstrap() {
    const app = await NestFactory.createApplicationContext(AppModule);
    const recipeService = app.get(RecipesService);
    const userService = app.get(UserService)
    const feedbackService = app.get(FeedbackService)

    await app.close();
}
bootstrap();