import type { RoomyState, Task, Bill, ShoppingItem } from './store';

export type Ctx = {
  state: RoomyState;
  ready: boolean;
  memberName: (id: string | null) => string;
  update: (patch: Partial<RoomyState>) => void;
  toggleTask: (id: string) => void;
  addTask: (t: Omit<Task, 'id' | 'done'>) => void;
  removeTask: (id: string) => void;
  redistribute: () => void;
  toggleBillPaid: (id: string) => void;
  addBill: (b: Omit<Bill, 'id' | 'paid' | 'paidAt' | 'split'>) => void;
  addItem: (name: string, category: ShoppingItem['category']) => void;
  toggleItem: (id: string) => void;
  removeItem: (id: string) => void;
  clearBought: () => void;
  reset: () => void;
};
