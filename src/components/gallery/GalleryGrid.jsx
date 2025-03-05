import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, Filter } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function GalleryGrid({
  images = [
    {
      id: "1",
      title: "Cure Happy",
      season: "Smile Precure",
      imageUrl:
        "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80",
      description: "Miyuki Hoshizora as Cure Happy from Smile Precure",
    },
    {
      id: "2",
      title: "Cure Flora",
      season: "Go! Princess Precure",
      imageUrl:
        "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
      description: "Haruka Haruno as Cure Flora from Go! Princess Precure",
    },
    {
      id: "3",
      title: "Cure Miracle",
      season: "Maho Girls Precure",
      imageUrl:
        "https://images.unsplash.com/photo-1558470598-a5dda9640f68?w=800&q=80",
      description: "Mirai Asahina as Cure Miracle from Maho Girls Precure",
    },
    {
      id: "4",
      title: "Cure Whip",
      season: "KiraKira Precure a la Mode",
      imageUrl:
        "https://images.unsplash.com/photo-1579546929662-711aa81148cf?w=800&q=80",
      description: "Ichika Usami as Cure Whip from KiraKira Precure a la Mode",
    },
    {
      id: "5",
      title: "Cure Yell",
      season: "HUGtto! Precure",
      imageUrl:
        "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80",
      description: "Hana Nono as Cure Yell from HUGtto! Precure",
    },
    {
      id: "6",
      title: "Cure Star",
      season: "Star Twinkle Precure",
      imageUrl:
        "https://images.unsplash.com/photo-1558470598-a5dda9640f68?w=800&q=80",
      description: "Hikaru Hoshina as Cure Star from Star Twinkle Precure",
    },
    {
      id: "7",
      title: "Cure Grace",
      season: "Healin Good Precure",
      imageUrl:
        "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
      description: "Nodoka Hanadera as Cure Grace from Healin Good Precure",
    },
    {
      id: "8",
      title: "Cure Summer",
      season: "Tropical-Rouge Precure",
      imageUrl:
        "https://images.unsplash.com/photo-1579546929662-711aa81148cf?w=800&q=80",
      description:
        "Manatsu Natsuumi as Cure Summer from Tropical-Rouge Precure",
    },
  ],
  selectedSeason = "",
}) {
  const [filteredImages, setFilteredImages] = useState(images);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeImage, setActiveImage] = useState(null);

  // Filter images based on selected season and search term
  useEffect(() => {
    let result = images;

    if (selectedSeason) {
      result = result.filter((image) => image.season === selectedSeason);
    }

    if (searchTerm) {
      result = result.filter(
        (image) =>
          image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          image.season.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (image.description &&
            image.description.toLowerCase().includes(searchTerm.toLowerCase())),
      );
    }

    setFilteredImages(result);
  }, [images, selectedSeason, searchTerm]);

  return (
    <div className="w-full bg-gradient-to-b from-purple-900 to-indigo-900 p-6 rounded-lg">
      <div className="mb-6 flex flex-col md:flex-row gap-4 items-center justify-between">
        <h2 className="text-3xl font-bold text-pink-300 tracking-wide">
          Precure Gallery
        </h2>

        <div className="relative w-full md:w-64">
          <Input
            type="text"
            placeholder="Search images..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-purple-800/50 border-pink-500/30 text-white placeholder:text-pink-300/50 focus-visible:ring-pink-500"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4