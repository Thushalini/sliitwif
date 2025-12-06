import React from 'react';
import EventCard from './EventCard';
import eventsData from '@/app/utilities/data/Events.json';
import type { Event, Webinar } from '@/app/types/events';

export default function PastEventsSection() {
  // Load events
  const events: (Event | Webinar)[] = (eventsData.Events || []).map((e: any) => ({
    ...e,
    image: typeof e.image === 'string' ? (e.image.startsWith('/') ? e.image : `/${e.image}`) : e.image,
  }));

  // Show first 4 on the homepage 
  const firstFour = events.slice(0, 4);

  return (
    <section id="past-events" className="bg-white py-16 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-brand">Past Events</h2>
          <a href="/events">
            <button className="px-6 py-2 bg-brand text-white rounded-md hover:bg-brand-700 transition">
              View More
            </button>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {firstFour.map((event, index) => {
            const isWebinar = 'youtube_link' in event && Boolean((event as Webinar).youtube_link);
            return (
              <EventCard key={event.id || index} event={event} isWebinar={isWebinar} />
            );
          })}
        </div>
      </div>
    </section>
  );
}