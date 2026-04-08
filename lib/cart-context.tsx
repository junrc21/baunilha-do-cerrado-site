"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

export interface CartItem {
  id: string;
  slug: string;
  name: string;
  price: number;
  priceFormatted: string;
  image: string;
  cookieCount?: number;
  qty: number;
  flavors: string[];
  observation: string;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "id">) => void;
  removeItem: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  clearCart: () => void;
  total: number;
  itemCount: number;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
}

const CartContext = createContext<CartContextType | null>(null);

const STORAGE_KEY = "bc_cart_v2";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setItems(JSON.parse(saved));
    } catch {}
  }, []);

  const persist = useCallback((next: CartItem[]) => {
    setItems(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {}
  }, []);

  const addItem = useCallback(
    (item: Omit<CartItem, "id">) => {
      const id = `${item.slug}-${Date.now()}`;
      persist([...items, { ...item, id }]);
    },
    [items, persist]
  );

  const removeItem = useCallback(
    (id: string) => persist(items.filter((i) => i.id !== id)),
    [items, persist]
  );

  const updateQty = useCallback(
    (id: string, qty: number) => {
      if (qty < 1) { removeItem(id); return; }
      persist(items.map((i) => (i.id === id ? { ...i, qty } : i)));
    },
    [items, persist, removeItem]
  );

  const clearCart = useCallback(() => persist([]), [persist]);

  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const itemCount = items.reduce((sum, i) => sum + i.qty, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQty,
        clearCart,
        total,
        itemCount,
        isOpen,
        openCart: () => setIsOpen(true),
        closeCart: () => setIsOpen(false),
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
