import { RecipeEntity } from "src/recipes/entities/recipe.entity";
import {Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { FeedbackEntity } from "src/feedback/entities/feedback.entity";

@Entity("User")
export class UserEntity {

    @PrimaryGeneratedColumn()
    id : number

    @Column()
    Name : string

    @Column()
    Email : string

    @Column()
    Password : string

    @Column()
    Biographie : String

    @Column()
    ImageUrl : String
    
    @ManyToMany(() => RecipeEntity)
    @JoinTable()
    savedRecipes: RecipeEntity[];
  
    @OneToMany(() => FeedbackEntity, feedback => feedback.userId)
    feedbacks: FeedbackEntity[];

}