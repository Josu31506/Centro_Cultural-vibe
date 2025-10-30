export interface Event {
  id: number;
  title: string;
  description: string;
  imageUrl?: string | null;
  startDate: string;
  endDate: string;
  location: string;
  type: string;
  status: string;
  capacity: number;
  costEntry: number;
  tags: string[];
}
