import Navbar from "@/components/Navbar";
import SectionTitle from "@/components/SectionTitle";
import PlayerCard from "@/components/PlayerCard";
import BackToTop from "@/components/BackToTop";
import NewsSection from "@/components/NewsSection";
import AchievementsSection from "@/components/AchievementsSection";
import RosterSection from "@/components/RosterSection";
import ConnectSection from "@/components/ConnectSection";
import { Github, Twitter, Instagram } from "lucide-react";

const players = [
  {
    id: 1,
    name: "Shadow",
    agent: "Jett",
    rank: "Immortal 2",
    image: "/placeholder.svg", // Replace with actual player image
    agentImage: "/placeholder.svg", // Replace with actual agent image
    stats: {
      kills: 2456,
      deaths: 1789,
      assists: 1234,
      kd: 1.37,
    },
  },
  {
    id: 2,
    name: "Phantom",
    agent: "Omen",
    rank: "Radiant",
    image: "/placeholder.svg", // Replace with actual player image
    agentImage: "/placeholder.svg", // Replace with actual agent image
    stats: {
      kills: 3012,
      deaths: 2100,
      assists: 1567,
      kd: 1.43,
    },
  },
  {
    id: 3,
    name: "Viper",
    agent: "Viper",
    rank: "Immortal 3",
    image: "/placeholder.svg", // Replace with actual player image
    agentImage: "/placeholder.svg", // Replace with actual agent image
    stats: {
      kills: 2890,
      deaths: 1950,
      assists: 1432,
      kd: 1.48,
    },
  },
  {
    id: 4,
    name: "Phoenix",
    agent: "Phoenix",
    rank: "Radiant",
    image: "/placeholder.svg", // Replace with actual player image
    agentImage: "/placeholder.svg", // Replace with actual agent image
    stats: {
      kills: 3156,
      deaths: 2234,
      assists: 1678,
      kd: 1.41,
    },
  },
  {
    id: 5,
    name: "Sage",
    agent: "Sage",
    rank: "Immortal 2",
    image: "/placeholder.svg", // Replace with actual player image
    agentImage: "/placeholder.svg", // Replace with actual agent image
    stats: {
      kills: 2345,
      deaths: 1876,
      assists: 2543,
      kd: 1.25,
    },
  },
  {
    id: 6,
    name: "Cypher",
    agent: "Cypher",
    rank: "Immortal 1",
    image: "/placeholder.svg", // Replace with actual player image
    agentImage: "/placeholder.svg", // Replace with actual agent image
    stats: {
      kills: 2567,
      deaths: 2012,
      assists: 1345,
      kd: 1.28,
    },
  },
  {
    id: 7,
    name: "Sova",
    agent: "Sova",
    rank: "Radiant",
    image: "/placeholder.svg", // Replace with actual player image
    agentImage: "/placeholder.svg", // Replace with actual agent image
    stats: {
      kills: 2987,
      deaths: 2145,
      assists: 1897,
      kd: 1.39,
    },
  },
  {
    id: 8,
    name: "Raze",
    agent: "Raze",
    rank: "Immortal 3",
    image: "/placeholder.svg", // Replace with actual player image
    agentImage: "/placeholder.svg", // Replace with actual agent image
    stats: {
      kills: 3234,
      deaths: 2456,
      assists: 1234,
      kd: 1.32,
    },
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-valorant-dark text-valorant-light">
      <Navbar />
      
      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{
          backgroundImage: "url('/placeholder.svg')", // Replace with Valorant-themed background
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed", // Added parallax effect
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-valorant-dark/70 to-valorant-dark" />
        <div className="relative z-10 text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 animate-fade-in-up">
            TEAM QUINCY
          </h1>
          <p className="text-xl md:text-2xl text-valorant-gray animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Rising to the top of Valorant competitive scene
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-valorant-dark/90">
        <div className="container mx-auto px-4">
          <SectionTitle title="About Us" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <p className="text-lg">
                Team Quincy is more than just a competitive Valorant team - we're a
                family of dedicated players pushing the boundaries of tactical
                gameplay. Founded with the vision to dominate the competitive
                scene, we bring together raw talent, strategic minds, and
                unmatched teamwork.
              </p>
              <p className="text-lg">
                Our unique approach to the game and commitment to excellence has
                made us stand out in the Valorant community. We're not just
                playing the game; we're redefining it.
              </p>
            </div>
            <div className="relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <img
                src="/placeholder.svg" // Replace with team image
                alt="Team Quincy"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <NewsSection />

      {/* Team Section */}
      <RosterSection players={players} />

      {/* Achievements Section */}
      <AchievementsSection />

      {/* Connect Section */}
      <ConnectSection />

      {/* Footer */}
      <footer className="bg-valorant-dark py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-valorant-red mb-4">QUINCY</h2>
              <p className="text-valorant-gray">
                © {new Date().getFullYear()} Team Quincy. All rights reserved.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-valorant-light mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-valorant-gray hover:text-valorant-red transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-valorant-gray hover:text-valorant-red transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#team" className="text-valorant-gray hover:text-valorant-red transition-colors">
                    Team
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-valorant-light mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-valorant-gray hover:text-valorant-red transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter />
                </a>
                <a
                  href="#"
                  className="text-valorant-gray hover:text-valorant-red transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram />
                </a>
                <a
                  href="#"
                  className="text-valorant-gray hover:text-valorant-red transition-colors"
                  aria-label="GitHub"
                >
                  <Github />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <BackToTop />
    </div>
  );
};

export default Index;
