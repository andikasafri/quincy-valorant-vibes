import PlayerCard from "@/components/PlayerCard";
import SectionTitle from "@/components/SectionTitle";

interface PlayerStats {
  kills: number;
  deaths: number;
  assists: number;
  kd: number;
}

interface PlayerInfo {
  id: number;
  name: string;
  agent: string;
  rank: string;
  image: string;
  agentImage: string;
  stats: PlayerStats;
}

interface RosterSectionProps {
  players: PlayerInfo[];
}

const RosterSection = ({ players }: RosterSectionProps) => {
  // Only display first 2 players initially
  const displayedPlayers = players.slice(0, 2);

  return (
    <section id="team" className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle title="Our Roster" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {displayedPlayers.map((player) => (
            <PlayerCard 
              key={player.id} 
              player={player} 
              allPlayers={players}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RosterSection;