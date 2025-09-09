import type { StateCreator } from "zustand";
import AIService from "../services/AIService";

export type AISliceType = {
  recipe: string;
  isGenerating: boolean;
  generateRecipe: (prompt: string) => Promise<void>;
};

export const createAISlice: StateCreator<AISliceType, [], [], AISliceType> = (
  set
) => ({
  recipe: "",
  isGenerating: false,
  generateRecipe: async (prompt: string) => {
    set({ recipe: "", isGenerating: true });
    const data = await AIService.generateRecipe(prompt);
    for await (const chunk of data) {
      set((state) => ({
        recipe: state.recipe + chunk,
      }));
    }
    set({ isGenerating: false });
  },
});
