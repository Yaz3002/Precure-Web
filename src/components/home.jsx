import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "./layout/Navbar";
import HeroSection from "./home/HeroSection";
import AboutPreview from "./home/AboutPreview";
import SeasonsPreview from "./home/SeasonsPreview";
import GalleryPreview from "./home/GalleryPreview";
import Footer from "./layout/Footer";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-950 to-purple-900">
      {/* Navigation */}
      <Navbar transparent={true} />

      {/* Hero Section */}
      <HeroSection
        title="Precure"
        subtitle="A Magical Journey of Friendship and Courage"
        backgroundImage="https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1920&q=80"
        characters={[
          {
            name: "Cure Happy",
            image:
              "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?w=800&q=80",
            position: "left",
          },
          {
            name: "Cure Flora",
            image:
              "https://images.unsplash.com/photo-1640952131659-49a06dd90ad2?w=800&q=80",
            position: "center",
          },
          {
            name: "Cure Grace",
            image:
              "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?w=800&q=80",
            position: "right",
          },
        ]}
      />

      {/* About Preview Section */}
      <AboutPreview
        title="About Precure"
        description="Pretty Cure (プリキュア) is a Japanese magical girl anime franchise created by Izumi Todo and produced by Toei Animation. The series follows ordinary girls who transform into legendary warriors known as Pretty Cure (or Precure) to fight against evil forces and protect the world."
        imageUrl="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&q=80"
        buttonText="Learn More"
        onButtonClick={() => (window.location.href = "/about")}
      />

      {/* Seasons Preview */}
      <SeasonsPreview
        seasons={[
          {
            title: "Futari wa Pretty Cure",
            year: "2004",
            episodes: 49,
            description:
              "The first season of the Pretty Cure franchise follows Nagisa Misumi and Honoka Yukishiro who transform into Cure Black and Cure White to fight against the evil forces of the Dark Zone.",
            image:
              "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&q=80",
            rating: 4.5,
            tags: ["Action", "Magic", "Friendship", "First Season"],
          },
          {
            title: "Heartcatch Precure",
            year: "2010",
            episodes: 49,
            description:
              "Tsubomi Hanasaki, a shy girl who loves flowers, becomes Cure Blossom and teams up with her new friend Erika who becomes Cure Marine to protect the Heart Tree from the Desert Apostles.",
            image:
              "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
            rating: 4.8,
            tags: ["Flowers", "Fashion", "Friendship", "Popular"],
          },
          {
            title: "Go! Princess Precure",
            year: "2015",
            episodes: 50,
            description:
              "Haruka Haruno enrolls in Noble Academy to follow her dream of becoming a princess. There she becomes Cure Flora and joins other Precures to protect everyone's dreams from being locked away.",
            image:
              "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80",
            rating: 4.7,
            tags: ["Princess", "Dreams", "Academy", "Fantasy"],
          },
        ]}
      />

      {/* Gallery Preview */}
      <GalleryPreview
        title="Explore Our Magical Gallery"
        description="Discover stunning artwork and memorable moments from across all Precure seasons in our vibrant gallery collection."
        images={[
          {
            id: "1",
            title: "Cure Happy",
            season: "Smile Precure",
            imageUrl:
              "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600&q=80",
          },
          {
            id: "2",
            title: "Cure Flora",
            season: "Go! Princess Precure",
            imageUrl:
              "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=600&q=80",
          },
          {
            id: "3",
            title: "Cure Miracle",
            season: "Maho Girls Precure",
            imageUrl:
              "https://images.unsplash.com/photo-1558470598-a5dda9640f68?w=600&q=80",
          },
          {
            id: "4",
            title: "Cure Whip",
            season: "KiraKira Precure a la Mode",
            imageUrl:
              "https://images.unsplash.com/photo-1579546929662-711aa81148cf?w=600&q=80",
          },
        ]}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
