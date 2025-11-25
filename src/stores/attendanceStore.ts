import { create } from 'zustand';
import { siteConfig } from '../config/site.config';

interface Attendee {
  id: string;
  name: string;
  checked: boolean;
  checkedAt?: string;
}

interface AttendanceStore {
  attendees: Attendee[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  checkAttendance: (name: string) => void;
  getFilteredAttendees: () => Attendee[];
  getAttendanceRate: () => number;
}

export const useAttendanceStore = create<AttendanceStore>((set, get) => ({
  attendees: siteConfig.members.map((name, index) => ({
    id: (index + 1).toString(),
    name,
    checked: false,
  })),
  searchQuery: '',
  setSearchQuery: (query) => set({ searchQuery: query }),
  checkAttendance: (name) => set((state) => ({
    attendees: state.attendees.map(attendee =>
      attendee.name === name
        ? { ...attendee, checked: true, checkedAt: new Date().toISOString() }
        : attendee
    ),
  })),
  getFilteredAttendees: () => {
    const { attendees, searchQuery } = get();
    return attendees.filter(attendee =>
      attendee.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  },
  getAttendanceRate: () => {
    const { attendees } = get();
    const checked = attendees.filter(a => a.checked).length;
    return attendees.length > 0 ? (checked / attendees.length) * 100 : 0;
  },
}));