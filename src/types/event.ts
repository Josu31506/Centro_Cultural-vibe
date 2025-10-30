export interface Event {
  id: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  tags: string[];
  location: string;
  date: string;
  time: string;
  price: string;
  image: string;
  startDate: string;
  countdown?: string;
}
