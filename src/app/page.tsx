'use client';
import { useEffect } from "react";
import HomeIntro from "./components/HomeIntro";
import PastEventsSection from "./components/events-and-webinars/PastEventsSection";
import WebinarsSection from "./components/events-and-webinars/WebinarsSection";

export default function Home() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, []);

  return (
    <main>
      <HomeIntro />
      {/* Events and Webinars Section */}
      <div id="events-section">
        <PastEventsSection />
        <WebinarsSection />
      </div>
    </main>
  );
}
