import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

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
}

const PlayerCard = ({ player }: PlayerCardProps) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className="relative group cursor-pointer bg-valorant-dark/50 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
        onClick={() => setShowModal(true)}
      >
        <img
          src={player.image}
          alt={player.name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-valorant-dark to-transparent p-4">
          <h3 className="text-valorant-light text-xl font-bold">{player.name}</h3>
          <p className="text-valorant-gray">{player.agent}</p>
        </div>
      </div>

      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="bg-valorant-dark text-valorant-light max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-valorant-red">
              {player.name}
            </DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <img
                src={player.agentImage}
                alt={player.agent}
                className="w-full h-auto rounded-lg"
              />
              <div className="text-center">
                <p className="text-xl font-bold">{player.agent}</p>
                <p className="text-valorant-gray">Main Agent</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold mb-2">Current Rank</h4>
                <p className="text-valorant-red text-2xl font-bold">
                  {player.rank}
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Statistics</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-valorant-dark/50 p-4 rounded">
                    <p className="text-sm text-valorant-gray">K/D Ratio</p>
                    <p className="text-xl font-bold">{player.stats.kd}</p>
                  </div>
                  <div className="bg-valorant-dark/50 p-4 rounded">
                    <p className="text-sm text-valorant-gray">Kills</p>
                    <p className="text-xl font-bold">{player.stats.kills}</p>
                  </div>
                  <div className="bg-valorant-dark/50 p-4 rounded">
                    <p className="text-sm text-valorant-gray">Deaths</p>
                    <p className="text-xl font-bold">{player.stats.deaths}</p>
                  </div>
                  <div className="bg-valorant-dark/50 p-4 rounded">
                    <p className="text-sm text-valorant-gray">Assists</p>
                    <p className="text-xl font-bold">{player.stats.assists}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PlayerCard;