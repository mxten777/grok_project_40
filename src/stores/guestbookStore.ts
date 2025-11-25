import { create } from 'zustand';

interface GuestbookEntry {
  id: string;
  nickname: string;
  message: string;
  password: string;
  createdAt: string;
}

interface GuestbookStore {
  entries: GuestbookEntry[];
  addEntry: (entry: Omit<GuestbookEntry, 'id' | 'createdAt'>) => void;
  editEntry: (id: string, password: string, newMessage: string) => boolean;
  deleteEntry: (id: string, password: string) => boolean;
}

export const useGuestbookStore = create<GuestbookStore>((set, get) => ({
  entries: [],
  addEntry: (entry) => set((state) => ({
    entries: [...state.entries, {
      ...entry,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    }],
  })),
  editEntry: (id, password, newMessage) => {
    const state = get();
    const entry = state.entries.find(e => e.id === id);
    if (entry && entry.password === password) {
      set({
        entries: state.entries.map(e =>
          e.id === id ? { ...e, message: newMessage } : e
        ),
      });
      return true;
    }
    return false;
  },
  deleteEntry: (id, password) => {
    const state = get();
    const entry = state.entries.find(e => e.id === id);
    if (entry && entry.password === password) {
      set({
        entries: state.entries.filter(e => e.id !== id),
      });
      return true;
    }
    return false;
  },
}));