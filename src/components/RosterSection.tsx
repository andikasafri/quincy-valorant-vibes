import { useRef } from "react";
import PlayerCard from "@/components/PlayerCard";
import SectionTitle from "@/components/SectionTitle";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useInView } from "react-intersection-observer";

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
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="team" className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle title="Our Roster" />
        <div
          ref={ref}
          className={`section-animate ${inView ? "in-view" : ""}`}
        >
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {players.map((player) => (
                <CarouselItem key={player.id} className="md:basis-1/2 lg:basis-1/3">
                  <PlayerCard player={player} allPlayers={players} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default RosterSection;