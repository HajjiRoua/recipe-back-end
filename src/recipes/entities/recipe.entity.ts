import { FeedbackEntity } from "src/feedback/entities/feedback.entity";
import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";


@Entity("Recipe")
export class RecipeEntity {

    @PrimaryGeneratedColumn()
    id : number

    @Column()
    Title : string

    // @Column()
    // description : string

    @Column()
    Ingredients : string[]

    // @Column()
    // Instructions : String[]

    @OneToMany(() => FeedbackEntity, feedback => feedback.recipeId)
    feedbacks: FeedbackEntity[];

}