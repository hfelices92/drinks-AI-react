import type { StateCreator } from "zustand";
import type { Recipe } from "../types";
import { createRecipeSlice, type RecipeSliceType } from "./recipeSlice";
import { createNotificationSlice, type NotificationSliceType } from "./notificationSlices";

export type FavoriteSliceType = {
  favorites: Recipe[];
  handleClickFavorite: (recipe: Recipe) => void;
  favoriteExists: (id: Recipe["idDrink"]) => boolean;
  loadFavorites: () => void;
};

export const createFavoriteSlice: StateCreator<FavoriteSliceType & RecipeSliceType & NotificationSliceType, [], [], FavoriteSliceType> = (
  set,
  get,
  api
) => ({
  favorites:[],
  handleClickFavorite: (recipe) => {
    if (get().favoriteExists(recipe.idDrink)) {
      const newFavorites = get().favorites.filter(
        (favorite) => favorite.idDrink !== recipe.idDrink
      );
      set({ favorites: newFavorites });
      createNotificationSlice(set, get, api).showNotification({text: "Eliminado de favoritos", error: true});
    } else {
      set((state) => ({ favorites: [...state.favorites, recipe] }));
      createNotificationSlice(set, get, api).showNotification({text: "Añadido a favoritos", error: false});
    }
    createRecipeSlice(set, get, api).closeModal();
    localStorage.setItem(
      "favorites",
      JSON.stringify(get().favorites)
    );
  },
  favoriteExists: (id) => {
    return get().favorites.some((fav) => fav.idDrink === id);
  },
  loadFavorites: () => {
    const favorites = localStorage.getItem("favorites");
    if (favorites) {
      set({ favorites: JSON.parse(favorites) });
    } 
  }
  
});
