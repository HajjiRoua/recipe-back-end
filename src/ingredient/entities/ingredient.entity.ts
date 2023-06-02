import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";


@Entity("Ingredient")
export class IngredientEntity {

    @PrimaryGeneratedColumn()
    id : number

    @Column()
    Name : String

    @Column()
    description : String

}