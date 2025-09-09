import type { StateCreator } from "zustand";
import type { FavoriteSliceType } from "./favoritesSlice";

type Notification = {
  text: string;
  error: boolean;
  show: boolean;
};
export type NotificationSliceType = {
  notification: Notification;
  showNotification: (payload: { text: string; error: boolean }) => void;
  hideNotification: () => void;
};

export const createNotificationSlice: StateCreator<
  NotificationSliceType & FavoriteSliceType,
  [],
  [],
  NotificationSliceType
> = (set, get) => ({
  notification: {
    text: "",
    error: false,
    show: false,
  },
  showNotification: (payload) => {
    set({ notification: { ...payload, show: true } });
    setTimeout(() => {
      get().hideNotification();
    }, 3000);
  },
  hideNotification: () => {
    set({ notification: { text: "", error: false, show: false } });
  },
});
