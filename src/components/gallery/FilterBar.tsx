import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, Filter } from "lucide-react";
import { motion } from "framer-motion";

interface FilterBarProps {
  onFilterChange?: (season: string) => void;
  activeFilter?: string;
  seasons?: string[];
}

const FilterBar = ({
  onFilterChange = () => {},
  activeFilter = "all",
  seasons = [
    "All",
    "Futari wa Precure",
    "Splash Star",
    "Yes! Precure 5",
    "Fresh Precure",
    "Heartcatch Precure",
    "Suite Precure",
    "Smile Precure",
    "Doki Doki Precure",
    "Happiness Charge",
    "Go! Princess",
    "Mahou Tsukai",
    "KiraKira",
    "HUGtto",
    "Star Twinkle",
    "Healin Good",
    "Tropical Rouge",
    "Delicious Party",
    "Hirogaru Sky",
    "Wonderful Miracle",
  ],
}: FilterBarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-purple-900 p-4 rounded-lg shadow-lg mb-6">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-bold text-white flex items-center">
          <Sparkles className="mr-2 h-5 w-5 text-pink-400" />
          Filter Gallery
        </h2>
        <Button
          variant="outline"
          size="sm"
          className="md:hidden bg-pink-500 hover:bg-pink-600 text-white border-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Filter className="h-4 w-4 mr-2" />
          Filters
        </Button>
      </div>

      <div className={`${isOpen ? "block" : "hidden"} md:block`}>
        <div className="flex flex-wrap gap-2">
          {seasons.map((season) => (
            <motion.div
              key={season}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant={
                  activeFilter.toLowerCase() === season.toLowerCase()
                    ? "default"
                    : "outline"
                }
                size="sm"
                onClick={() => onFilterChange(season.toLowerCase())}
                className={`
                  ${
                    activeFilter.toLowerCase() === season.toLowerCase()
                      ? "bg-pink-500 hover:bg-pink-600 text-white"
                      : "bg-purple-800 text-pink-200 hover:bg-purple-700 border-pink-300"
                  }
                  transition-all duration-300 ease-in-out
                `}
              >
                {season}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
