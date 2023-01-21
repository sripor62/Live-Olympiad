import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import authStore from "./auth.store";

let myAuthStore = devtools(authStore);
myAuthStore = persist(myAuthStore, { name: "current_user" });

export const useStore = create(myAuthStore);
