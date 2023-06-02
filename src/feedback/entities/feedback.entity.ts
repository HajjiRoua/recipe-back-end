import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export @Entity()
class FeedbackEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  recipeId: number;

  @Column()
  userId: number;

  @Column()
  comment: string;

  @Column()
  imageUrl: string;

  
}
