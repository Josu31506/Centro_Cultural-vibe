import { events } from '../types/data';
import type { Event } from '../types/event';

export const getHighlightedEvents = (): Event[] => events.slice(0, 4);

export const getEventById = (id: string): Event | undefined => events.find((event) => event.id === id);
