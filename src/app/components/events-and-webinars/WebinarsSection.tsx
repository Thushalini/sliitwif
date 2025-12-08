import React from 'react';
import EventCard from './EventCard';
import webinarsData from '@/app/utilities/data/Webinars.json';
import type { Webinar } from '@/app/types/events';

export default function WebinarsSection() {
  // Load webinars
  const webinars: Webinar[] = (webinarsData.Webinars || []).map((w: any) => ({
    ...w,
    image: typeof w.image === 'string' ? (w.image.startsWith('/') ? w.image : `/${w.image}`) : w.image,
  }));

  // Show first 4 on the homepage 
  const firstFour = webinars.slice(0, 4);

  return (
    <section id="webinars" className="py-16 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-brand">Webinars</h2>
          <a href="/webinars">
            <button className="px-6 py-2 bg-brand text-white rounded-md hover:bg-brand-700 transition">
              View More
            </button>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {firstFour.map((webinar, index) => (
            <EventCard key={webinar.id || index} event={webinar} isWebinar={true} />
          ))}
        </div>
      </div>
    </section>
  );
}