export interface Event {
  id?: number;
  title: string;
  image: string;
  description?: string;
  date?: string;
  speaker?: string;
  time?: string;
}

export interface Webinar {
  id?: number;
  title: string;
  image: string;
  youtube_link: string;
}

export interface UpcomingEvent extends Event {
  date: string;
  time: string;
  speaker: string;
  description: string;
}