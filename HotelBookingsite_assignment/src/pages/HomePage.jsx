import React from "react";
import Herosection from "../components/Herosection";
import ExploreSection from "../components/ExploreSection";
import ImageContentSection from "../components/ImageContentSection";
import HomeCarausalOne from "../components/HomeCarausalOne";
import RoomSection from "../components/RoomSection";
import SocialMediaSection from "../components/SocialMediaSection";
import RoomsCarausalSection from "../components/RoomsCarausalSection";
import EventSection from "../components/EventSection";
import NewsLetterSection from "../components/NewsLetterSection";
import Footer from "../components/Footer";
import OnScrollRevealComponent from "../animation/Revel";

export default function HomePage() {
  return (
    <div className="w-full">
      <Herosection />
      <ExploreSection />
      <ImageContentSection />
      <HomeCarausalOne />
      <RoomSection />
      <SocialMediaSection />
      <RoomsCarausalSection />
      <EventSection />
      <NewsLetterSection />
      <Footer/>
    </div>
  );
}
