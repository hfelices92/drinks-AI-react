import { create } from "zustand";
import { createRecipeSlice } from "./recipeSlice";
import { devtools } from "zustand/middleware";
import type { RecipeSliceType } from "./recipeSlice";
import { createFavoriteSlice, type FavoriteSliceType } from "./favoritesSlice";
import { createNotificationSlice, type NotificationSliceType } from "./notificationSlices";

export const useAppStore = create<RecipeSliceType & FavoriteSliceType & NotificationSliceType>()(
  devtools((...a) => ({
    ...createRecipeSlice(...a),
    ...createFavoriteSlice(...a),
    ...createNotificationSlice(...a)
  }))
);
