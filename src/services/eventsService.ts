import client from '../axios/client';
import type { Event } from '../types/event';

interface EventResponse extends Omit<Event, 'tags'> {
  imageUrl?: string | null;
  tags?: string[] | null;
}

const normalizeEvent = (event: EventResponse): Event => ({
  ...event,
  tags: event.tags ?? []
});

export const getAllEvents = async (): Promise<Event[]> => {
  const { data } = await client.get<EventResponse[]>('/api/event/all');
  return data.map(normalizeEvent);
};

export const getEventById = async (id: string | number): Promise<Event> => {
  const { data } = await client.get<EventResponse>(`/api/event/${id}`);
  return normalizeEvent(data);
};

export const enrollInEvent = async (eventId: number): Promise<void> => {
  await client.post(`/api/user/me/enroll/${eventId}`);
};