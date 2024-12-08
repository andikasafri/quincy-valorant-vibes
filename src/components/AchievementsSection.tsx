import { useInView } from "react-intersection-observer";
import SectionTitle from "./SectionTitle";
import { Trophy } from "lucide-react";

const achievements = [
  {
    id: 1,
    title: "Regional Champions 2024",
    description: "First place in the Regional Valorant Championship",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    title: "Best Team Spirit Award",
    description: "Recognized for exceptional teamwork and sportsmanship",
    image: "/placeholder.svg",
  },
];

const AchievementsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="py-20 bg-valorant-dark/90">
      <div className="container mx-auto px-4">
        <SectionTitle title="Our Achievements" />
        <div ref={ref} className="space-y-16">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.id}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              } transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Trophy className="text-valorant-red w-8 h-8 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-valorant-light mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-valorant-gray">{achievement.description}</p>
                  </div>
                </div>
              </div>
              <div className={`relative ${index % 2 === 1 ? "md:order-first" : ""}`}>
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="rounded-lg shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;