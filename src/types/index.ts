import z from "zod"
import type { CategoriesAPIResponse, DrinkAPIResponse, DrinksAPIResponse, RecipeAPIResponseSchema, SearchFilterSchema } from "../schemas/recipes-schema";


export type Category = z.infer<typeof CategoriesAPIResponse>['drinks'][number];
export type SearchFilter = z.infer<typeof SearchFilterSchema>;
export type Drinks = z.infer<typeof DrinksAPIResponse>;
export type Drink = z.infer<typeof DrinkAPIResponse>;
export type Recipe = z.infer<typeof RecipeAPIResponseSchema>;