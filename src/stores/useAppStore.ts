import { create } from "zustand";
import { createRecipeSlice } from "./recipeSlice";
import { devtools } from "zustand/middleware";
import type { RecipeSliceType } from "./recipeSlice";
import { createFavoriteSlice, type FavoriteSliceType } from "./favoritesSlice";
import { createNotificationSlice, type NotificationSliceType } from "./notificationSlices";
import  { createAISlice ,type AISliceType } from "./aiSlice";

export const useAppStore = create<RecipeSliceType & FavoriteSliceType & NotificationSliceType & AISliceType>()(
  devtools((...a) => ({
    ...createRecipeSlice(...a),
    ...createFavoriteSlice(...a),
    ...createNotificationSlice(...a),
    ...createAISlice(...a),
  }))
);
