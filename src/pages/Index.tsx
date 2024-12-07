import Navbar from "@/components/Navbar";
import SectionTitle from "@/components/SectionTitle";
import PlayerCard from "@/components/PlayerCard";

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
  // Add more players as needed
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

      {/* Team Section */}
      <section id="team" className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle title="Our Roster" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {players.map((player) => (
              <PlayerCard key={player.id} player={player} />
            ))}
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section id="connect" className="py-20 bg-valorant-dark/90">
        <div className="container mx-auto px-4">
          <SectionTitle title="Connect With Us" />
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-valorant-dark/50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Join Our Discord</h3>
              <p className="text-valorant-gray mb-6">
                Connect with our community, participate in tournaments, and find
                teammates for your next competitive match!
              </p>
              <iframe
                src="https://discord.com/widget?id=YOUR_DISCORD_SERVER_ID"
                width="100%"
                height="400"
                frameBorder="0"
                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                className="rounded-lg"
              ></iframe>
              <a
                href="https://discord.gg/YOUR_INVITE_LINK"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 px-8 py-3 bg-valorant-red text-white font-bold rounded-lg hover:bg-valorant-red/80 transition-colors"
              >
                Join Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-valorant-dark py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-valorant-red mb-4">QUINCY</h2>
            <p className="text-valorant-gray mb-6">
              © {new Date().getFullYear()} Team Quincy. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;