import React from 'react';
import Image from 'next/image';
import { Event, Webinar } from '@/app/types/events';

interface EventCardProps {
  event: Event | Webinar;
  isWebinar?: boolean;
}

export default function EventCard({ event, isWebinar = false }: EventCardProps) {
  const CardContent = () => (
    <div 
      className="bg-white rounded-lg shadow-md p-4 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 cursor-pointer group h-full"
    >
      <div className="overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          width={800}
          height={800}
          className="w-full h-full rounded-lg object-cover transition-transform duration-500"
        />
      </div>
      <div className="p-4 flex flex-col" style={{ minHeight: isWebinar ? '180px' : 'auto' }}>
        <div className='h-32'>
          <h3 className="font-bold text-lg mb-2 text-gray-800 transition-colors duration-300 group-hover:text-brand flex-grow break-words line-clamp-2">
            {event.title}
          </h3>
          
          {!isWebinar && 'description' in event && event.description && (
            <p className="text-gray-600 text-sm mb-4 line-clamp-3">{event.description}</p>
          )}
        </div>
        {!isWebinar && (
        <div className='bg-brand-100 rounded-md px-3 py-2'>
          {!isWebinar && 'speaker' in event && event.speaker && (
            <div className="text-gray-600 text-sm mb-1 flex items-center gap-2 transition-all duration-300 group-hover:translate-x-2 break-words whitespace-normal">
              {event.speaker}
            </div>
          )}

          {!isWebinar && 'date' in event && event.date && (
            <div className="text-gray-600 text-sm flex items-center gap-2 transition-all duration-300 group-hover:translate-x-2 break-words whitespace-normal">
              {event.date}
            </div>
          )}
        </div>
        )}
        
        {isWebinar && (
          <button className="w-1/2 py-2 bg-brand text-white rounded transition-all duration-300 group-hover:bg-brand-700 group-hover:shadow-lg group-hover:scale-105 mt-auto self-end">
            View
          </button>
        )}
      </div>
    </div>
  );

  // If it's a webinar, wrap in anchor tag
  if (isWebinar && 'youtube_link' in event) {
    return (
      <a
        href={event.youtube_link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <CardContent />
      </a>
    );
  }

  // Otherwise, return card without link
  return <CardContent />;
}