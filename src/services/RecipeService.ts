import axios from "axios";
import {
  CategoriesAPIResponse,
  DrinksAPIResponse,
  RecipeAPIResponseSchema,
} from "../schemas/recipes-schema";
import type { Drink, SearchFilter } from "../types";

export async function getCategories() {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
  const { data } = await axios.get(url);
  const result = CategoriesAPIResponse.safeParse(data);

  if (!result.success) {
    console.error(result.error);
    throw new Error("Failed to fetch categories");
  } else {
    return data.drinks;
  }
}

export async function getRecipesByFilter(searchFilter: SearchFilter) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${searchFilter.category}&i=${searchFilter.ingredient}`;
  const { data } = await axios.get(url);

  const result = DrinksAPIResponse.safeParse(data);
  if (!result.success) {
    console.error(result.error);
    throw new Error("Failed to fetch recipes");
  } else {
    return result.data.drinks;
  }
}

export async function getRecipeById(id: Drink['idDrink']) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  const { data } = await axios.get(url);
  const result = RecipeAPIResponseSchema.safeParse(data.drinks[0]);
  if (!result.success) {
    console.error(result.error);
    throw new Error("Failed to fetch recipe by ID");
  } else {
    return result.data;
  }
}
