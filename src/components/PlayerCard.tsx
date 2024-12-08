import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

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

interface PlayerCardProps {
  player: PlayerInfo;
  allPlayers: PlayerInfo[];
}

const PlayerCard = ({ player: initialPlayer, allPlayers }: PlayerCardProps) => {
  const [showModal, setShowModal] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState(initialPlayer);

  const currentIndex = allPlayers.findIndex((p) => p.id === currentPlayer.id);

  const handlePrevious = () => {
    const newIndex = currentIndex === 0 ? allPlayers.length - 1 : currentIndex - 1;
    setCurrentPlayer(allPlayers[newIndex]);
  };

  const handleNext = () => {
    const newIndex = currentIndex === allPlayers.length - 1 ? 0 : currentIndex + 1;
    setCurrentPlayer(allPlayers[newIndex]);
  };

  return (
    <>
      <div
        className="relative group cursor-pointer bg-valorant-dark/50 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
        onClick={() => setShowModal(true)}
      >
        <img
          src={initialPlayer.image}
          alt={initialPlayer.name}
          className="w-full h-64 object-cover"
          loading="lazy"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-valorant-dark to-transparent p-4">
          <h3 className="text-valorant-light text-xl font-bold">{initialPlayer.name}</h3>
          <p className="text-valorant-gray">{initialPlayer.agent}</p>
        </div>
      </div>

      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="bg-valorant-dark text-valorant-light max-w-3xl">
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-valorant-red">
              {currentPlayer.name}
            </DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <img
                src={currentPlayer.agentImage}
                alt={currentPlayer.agent}
                className="w-full h-auto rounded-lg"
                loading="lazy"
              />
              <div className="text-center">
                <p className="text-xl font-bold">{currentPlayer.agent}</p>
                <p className="text-valorant-gray">Main Agent</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold mb-2">Current Rank</h4>
                <p className="text-valorant-red text-2xl font-bold">
                  {currentPlayer.rank}
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Statistics</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-valorant-dark/50 p-4 rounded">
                    <p className="text-sm text-valorant-gray">K/D Ratio</p>
                    <p className="text-xl font-bold">{currentPlayer.stats.kd}</p>
                  </div>
                  <div className="bg-valorant-dark/50 p-4 rounded">
                    <p className="text-sm text-valorant-gray">Kills</p>
                    <p className="text-xl font-bold">{currentPlayer.stats.kills}</p>
                  </div>
                  <div className="bg-valorant-dark/50 p-4 rounded">
                    <p className="text-sm text-valorant-gray">Deaths</p>
                    <p className="text-xl font-bold">{currentPlayer.stats.deaths}</p>
                  </div>
                  <div className="bg-valorant-dark/50 p-4 rounded">
                    <p className="text-sm text-valorant-gray">Assists</p>
                    <p className="text-xl font-bold">{currentPlayer.stats.assists}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <button
              onClick={handlePrevious}
              className="p-2 hover:bg-valorant-red/20 rounded-full transition-colors"
              aria-label="Previous player"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 hover:bg-valorant-red/20 rounded-full transition-colors"
              aria-label="Next player"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PlayerCard;