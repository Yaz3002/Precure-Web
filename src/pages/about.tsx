import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Sparkles,
  Star,
  Heart,
  Info,
  Calendar,
  Image,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AboutPage = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-indigo-900 to-pink-900 text-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        >
          <img
            src="https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1200&q=80"
            alt="Precure Heroes"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center relative z-20">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-300"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            About Precure
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-center max-w-2xl text-pink-100"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover the magical world of Pretty Cure, one of Japan's most
            beloved magical girl anime franchises
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-purple-900 to-transparent"></div>
      </section>

      {/* Main Content */}
      <motion.div
        className="container mx-auto px-4 py-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Introduction */}
        <motion.section className="mb-16" variants={itemVariants}>
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="h-6 w-6 text-pink-400" />
            <h2 className="text-3xl font-bold text-pink-300">
              The Magical World of Precure
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg mb-4 text-pink-100">
                Pretty Cure (プリキュア, Purikyua), also known as Precure, is a
                Japanese magical girl anime franchise created by Izumi Todo and
                produced by Toei Animation. The series follows ordinary girls
                who transform into legendary warriors known as Pretty Cure to
                fight against evil forces.
              </p>
              <p className="text-lg mb-4 text-pink-100">
                Since its debut in 2004 with "Futari wa Pretty Cure," the
                franchise has grown to include multiple seasons, each with its
                own unique characters, themes, and stories, while maintaining
                the core values of friendship, courage, and hope.
              </p>
              <div className="flex gap-4 mt-6">
                <Button className="bg-pink-500 hover:bg-pink-600">
                  <Star className="mr-2 h-4 w-4" /> Explore Seasons
                </Button>
                <Button
                  variant="outline"
                  className="border-pink-500 text-pink-300 hover:bg-pink-500/20"
                >
                  <Heart className="mr-2 h-4 w-4" /> Meet Characters
                </Button>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden">
              <motion.img
                src="https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80"
                alt="Precure Team"
                className="w-full h-full object-cover rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-purple-900/90 to-transparent">
                <p className="text-sm text-pink-200">
                  The magical warriors of Precure fighting together
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Franchise History */}
        <motion.section className="mb-16" variants={itemVariants}>
          <div className="flex items-center gap-2 mb-6">
            <Calendar className="h-6 w-6 text-pink-400" />
            <h2 className="text-3xl font-bold text-pink-300">
              Franchise History
            </h2>
          </div>
          <Card className="bg-purple-800/50 border-pink-500/30">
            <CardContent className="p-6">
              <div className="space-y-8">
                <div className="relative pl-8 border-l-2 border-pink-500">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-pink-500"></div>
                  <h3 className="text-xl font-bold text-pink-300 mb-2">
                    2004: The Beginning
                  </h3>
                  <p className="text-pink-100">
                    The franchise began with "Futari wa Pretty Cure," featuring
                    Nagisa Misumi (Cure Black) and Honoka Yukishiro (Cure White)
                    as they battle the Dark Zone. The series' success led to a
                    sequel and established the foundation for future seasons.
                  </p>
                </div>

                <div className="relative pl-8 border-l-2 border-pink-500">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-pink-500"></div>
                  <h3 className="text-xl font-bold text-pink-300 mb-2">
                    2007-2010: Expansion Era
                  </h3>
                  <p className="text-pink-100">
                    This period saw the introduction of new standalone seasons
                    with unique themes, including "Yes! Pretty Cure 5," "Fresh
                    Pretty Cure!" and "Heartcatch Pretty Cure!" Each season
                    brought new magical systems and larger teams of Cures.
                  </p>
                </div>

                <div className="relative pl-8 border-l-2 border-pink-500">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-pink-500"></div>
                  <h3 className="text-xl font-bold text-pink-300 mb-2">
                    2011-2015: Golden Age
                  </h3>
                  <p className="text-pink-100">
                    Seasons like "Suite Pretty Cure♪," "Smile Pretty Cure!" and
                    "Go! Princess Pretty Cure" further expanded the franchise's
                    popularity with innovative concepts, memorable characters,
                    and enhanced animation quality.
                  </p>
                </div>

                <div className="relative pl-8 border-l-2 border-pink-500">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-pink-500"></div>
                  <h3 className="text-xl font-bold text-pink-300 mb-2">
                    2016-Present: Modern Era
                  </h3>
                  <p className="text-pink-100">
                    Recent seasons including "Maho Girls Pretty Cure!," "Star
                    Twinkle Pretty Cure," and "Delicious Party Pretty Cure"
                    continue to innovate while honoring the franchise's
                    traditions, introducing new magical concepts and diverse
                    character designs.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Key Features */}
        <motion.section className="mb-16" variants={itemVariants}>
          <div className="flex items-center gap-2 mb-6">
            <Info className="h-6 w-6 text-pink-400" />
            <h2 className="text-3xl font-bold text-pink-300">Key Features</h2>
          </div>

          <Tabs defaultValue="themes" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-purple-800/50 border-pink-500/30">
              <TabsTrigger
                value="themes"
                className="data-[state=active]:bg-pink-500 data-[state=active]:text-white"
              >
                Themes & Values
              </TabsTrigger>
              <TabsTrigger
                value="transformation"
                className="data-[state=active]:bg-pink-500 data-[state=active]:text-white"
              >
                Transformation
              </TabsTrigger>
              <TabsTrigger
                value="impact"
                className="data-[state=active]:bg-pink-500 data-[state=active]:text-white"
              >
                Cultural Impact
              </TabsTrigger>
            </TabsList>

            <TabsContent
              value="themes"
              className="mt-6 bg-purple-800/30 p-6 rounded-lg border border-pink-500/30"
            >
              <h3 className="text-xl font-bold text-pink-300 mb-4">
                Themes & Values
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-purple-900/50 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-pink-200 mb-2">
                    Friendship & Teamwork
                  </h4>
                  <p className="text-pink-100">
                    At the heart of every Precure season is the power of
                    friendship and working together to overcome challenges. The
                    Cures always find strength in their bonds with each other.
                  </p>
                </div>
                <div className="bg-purple-900/50 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-pink-200 mb-2">
                    Courage & Determination
                  </h4>
                  <p className="text-pink-100">
                    Precure heroines face their fears and grow stronger through
                    challenges, showing viewers the importance of perseverance
                    and bravery in difficult situations.
                  </p>
                </div>
                <div className="bg-purple-900/50 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-pink-200 mb-2">
                    Diversity & Inclusion
                  </h4>
                  <p className="text-pink-100">
                    Modern Precure seasons embrace diversity in character
                    personalities, backgrounds, and strengths, teaching that
                    differences should be celebrated and respected.
                  </p>
                </div>
                <div className="bg-purple-900/50 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-pink-200 mb-2">
                    Hope & Optimism
                  </h4>
                  <p className="text-pink-100">
                    Even in the darkest moments, Precure characters maintain
                    hope and optimism, showing that a positive outlook can help
                    overcome seemingly impossible obstacles.
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent
              value="transformation"
              className="mt-6 bg-purple-800/30 p-6 rounded-lg border border-pink-500/30"
            >
              <h3 className="text-xl font-bold text-pink-300 mb-4">
                Magical Transformation
              </h3>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <p className="text-pink-100 mb-4">
                    A signature element of the Precure franchise is the
                    spectacular transformation sequences where ordinary girls
                    transform into magical warriors. Each season introduces
                    unique transformation items and phrases.
                  </p>
                  <p className="text-pink-100 mb-4">
                    From the Heartful Communes of the original series to the
                    Star Color Pendants of Star Twinkle Precure, these magical
                    items are central to the Cures' powers and often become
                    popular toys in real life.
                  </p>
                  <div className="bg-purple-900/50 p-4 rounded-lg mt-4">
                    <h4 className="text-lg font-semibold text-pink-200 mb-2">
                      Famous Transformation Phrases
                    </h4>
                    <ul className="list-disc list-inside text-pink-100 space-y-2">
                      <li>"Dual Aurora Wave!" - Futari wa Pretty Cure</li>
                      <li>"Pretty Cure! Metamorphose!" - Yes! Pretty Cure 5</li>
                      <li>
                        "Let's Play! Pretty Cure Modulation!" - Suite Precure
                      </li>
                      <li>
                        "Pretty Cure! Princess Engage!" - Go! Princess Precure
                      </li>
                      <li>
                        "Star Color Pendant! Color Charge!" - Star Twinkle
                        Precure
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="md:w-1/3">
                  <div className="relative rounded-lg overflow-hidden h-full">
                    <motion.img
                      src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80"
                      alt="Precure Transformation"
                      className="w-full h-full object-cover rounded-lg"
                      animate={{
                        boxShadow: [
                          "0 0 10px #ff69b4",
                          "0 0 20px #ff69b4",
                          "0 0 10px #ff69b4",
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-purple-900/90 to-transparent">
                      <p className="text-sm text-pink-200">
                        The magical transformation sequence is a highlight of
                        each episode
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent
              value="impact"
              className="mt-6 bg-purple-800/30 p-6 rounded-lg border border-pink-500/30"
            >
              <h3 className="text-xl font-bold text-pink-300 mb-4">
                Cultural Impact
              </h3>
              <p className="text-pink-100 mb-6">
                Since its debut in 2004, Precure has become a cultural
                phenomenon in Japan and has gained international recognition.
                The franchise has expanded beyond anime to include movies,
                merchandise, live shows, and more.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-purple-900/50 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-pink-200 mb-2">
                    Merchandise Empire
                  </h4>
                  <p className="text-pink-100">
                    Precure has generated billions in merchandise sales, from
                    transformation toys to clothing, stationery, and food
                    products, becoming one of Japan's most profitable children's
                    franchises.
                  </p>
                </div>
                <div className="bg-purple-900/50 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-pink-200 mb-2">
                    Cross-Generational Appeal
                  </h4>
                  <p className="text-pink-100">
                    While primarily targeted at young girls, the series has
                    attracted fans of all ages and genders due to its compelling
                    storytelling, character development, and action sequences.
                  </p>
                </div>
                <div className="bg-purple-900/50 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-pink-200 mb-2">
                    Global Recognition
                  </h4>
                  <p className="text-pink-100">
                    Though most popular in Asia, Precure has gained
                    international fans through streaming services and localized
                    adaptations, including the English dub "Glitter Force" on
                    Netflix.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.section>

        {/* Gallery Preview */}
        <motion.section className="mb-16" variants={itemVariants}>
          <div className="flex items-center gap-2 mb-6">
            <Image className="h-6 w-6 text-pink-400" />
            <h2 className="text-3xl font-bold text-pink-300">
              Gallery Preview
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=400&q=80",
              "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80",
              "https://images.unsplash.com/photo-1558470598-a5dda9640f68?w=400&q=80",
              "https://images.unsplash.com/photo-1579546929662-711aa81148cf?w=400&q=80",
            ].map((image, index) => (
              <motion.div
                key={index}
                className="relative rounded-lg overflow-hidden aspect-square"
                whileHover={{ scale: 1.05, zIndex: 10 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={image}
                  alt={`Precure Gallery Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <p className="text-sm text-white">
                    Precure Magical Moment {index + 1}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center mt-6">
            <Button asChild className="bg-pink-500 hover:bg-pink-600">
              <Link to="/gallery">
                <Image className="mr-2 h-4 w-4" /> View Full Gallery
              </Link>
            </Button>
          </div>
        </motion.section>

        {/* External Resources */}
        <motion.section variants={itemVariants}>
          <div className="flex items-center gap-2 mb-6">
            <ExternalLink className="h-6 w-6 text-pink-400" />
            <h2 className="text-3xl font-bold text-pink-300">
              External Resources
            </h2>
          </div>
          <Card className="bg-purple-800/50 border-pink-500/30">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-purple-900/50 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-pink-200 mb-2">
                    Official Sites
                  </h4>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="#"
                        className="text-pink-300 hover:text-pink-100 flex items-center"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" /> Official
                        Precure Website (Japanese)
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-pink-300 hover:text-pink-100 flex items-center"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" /> Toei Animation
                        Official Site
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="bg-purple-900/50 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-pink-200 mb-2">
                    Fan Resources
                  </h4>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="#"
                        className="text-pink-300 hover:text-pink-100 flex items-center"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" /> Pretty Cure
                        Wiki
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-pink-300 hover:text-pink-100 flex items-center"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" /> Precure Fan
                        Community
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <Separator className="my-6 bg-pink-500/30" />
              <p className="text-pink-100 text-center">
                This fan site is not affiliated with Toei Animation or any
                official Precure properties. All trademarks belong to their
                respective owners.
              </p>
            </CardContent>
          </Card>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default AboutPage;
