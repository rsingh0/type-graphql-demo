import { Field, ID, InputType, ObjectType } from "type-graphql";

@ObjectType()
export class Recipe {
  @Field() // For GraphQl Schema
  title: string; // For typescript

  @Field({ nullable: true })
  description?: string;

  @Field()
  creationDate: Date;

  @Field((type) => [String])
  ingredients: string[];
}

@InputType()
export class RecipeInput {
  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;
}
