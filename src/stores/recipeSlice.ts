import type { StateCreator } from "zustand";
import {
  getCategories,
  getRecipesByFilter,
  getRecipeById,
} from "../services/RecipeService";
import type { Category, Drink, Recipe, SearchFilter } from "../types";
import type { FavoriteSliceType } from "./favoritesSlice";


export type RecipeSliceType = {
  categories: Category[];
  drinks: Drink[];
  selectedRecipe: Recipe;
  modal: boolean;
  fetchCategories: () => Promise<void>;
  searchRecipes: (SearchFilter: SearchFilter) => Promise<void>;
  selectRecipe: (id: Drink["idDrink"]) => Promise<void>;
  closeModal: () => void;
};

export const createRecipeSlice: StateCreator<RecipeSliceType & FavoriteSliceType, [], [], RecipeSliceType> = (set) => ({
  categories: [],
  drinks: [],
  selectedRecipe: {} as Recipe,
  modal: false,
  fetchCategories: async () => {
    set({ categories: await getCategories() });
  },

  searchRecipes: async (searchFilter) => {
    const drinks = await getRecipesByFilter(searchFilter);

    set({ drinks });
  },
  selectRecipe: async (id) => {
    const selectedRecipe = await getRecipeById(id);

    set({ selectedRecipe, modal: true });
  },
  closeModal: () => {
    set({ modal: false })
    setTimeout(() => {
      set({ selectedRecipe: {} as Recipe });
    }, 300);
  }
});
