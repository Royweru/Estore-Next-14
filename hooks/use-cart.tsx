import { Product } from "@/types";
import { Category, Image, Size } from "@prisma/client";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { toast } from "sonner";

interface CartStore {
  items: Product[];
  addItem: (
    data: Product & { images: Image[]; size: Size; category?: Category }
  ) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

export const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: Product) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === data.id);

        if (existingItem)
          return toast.error("Item successfully added!", {
            style: {
              backgroundColor: "green",
            },
          });

        set({ items: [...get().items, data] });
        toast.success("Item successfully added!", {
          style: {
            background: "green",
          },
        });
      },
      removeItem: (id: string) => {
        set({ items: [...get().items.filter((item) => item.id !== id)] });
      },
      removeAll: () => {
        set({ items: [] });
        toast.success("Item successfully added!");
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
