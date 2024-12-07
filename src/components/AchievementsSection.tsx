import SectionTitle from "./SectionTitle";
import { Trophy } from "lucide-react";

const achievements = [
  {
    id: 1,
    title: "Regional Champions 2024",
    description: "First place in the Regional Valorant Championship",
  },
  {
    id: 2,
    title: "Best Team Spirit Award",
    description: "Recognized for exceptional teamwork and sportsmanship",
  },
];

const AchievementsSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle title="Our Achievements" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className="bg-valorant-dark/50 p-8 rounded-lg flex items-start space-x-4 hover:transform hover:scale-105 transition-transform duration-300"
            >
              <Trophy className="text-valorant-red w-8 h-8 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-valorant-light mb-2">
                  {achievement.title}
                </h3>
                <p className="text-valorant-gray">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;