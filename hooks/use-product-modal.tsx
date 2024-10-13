import { Product } from "@/types";
import { Category, Image, Size } from "@prisma/client";
import { create } from "zustand";

interface productModalStore {
  isOpen: boolean;
  onOpen: (
    data: Product & {
      category?: Category;
      images: Image[];
      size: Size;
    }
  ) => void;
  onClose: () => void;
  data?:
    | (Product & {
        category?: Category;
        images: Image[];
        size: Size;
      })
    | undefined;
}

export const useProductModal = create<productModalStore>((set) => ({
  isOpen: false,
  onOpen: (
    data: Product & {
      category?: Category;
      images: Image[];
      size: Size;
    }
  ) => set({ isOpen: true, data }),
  onClose: () => set({ isOpen: false }),
  data: undefined,
}));
