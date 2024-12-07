import SectionTitle from "./SectionTitle";

const news = [
  {
    id: 1,
    title: "Team Quincy Qualifies for Championship",
    date: "2024-03-15",
    content: "Exciting news! Our team has qualified for the upcoming championship...",
  },
  {
    id: 2,
    title: "New Player Announcement",
    date: "2024-03-10",
    content: "We're thrilled to welcome our newest member to Team Quincy...",
  },
];

const NewsSection = () => {
  return (
    <section className="py-20 bg-valorant-dark/90">
      <div className="container mx-auto px-4">
        <SectionTitle title="Latest News" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {news.map((item) => (
            <div
              key={item.id}
              className="bg-valorant-dark/50 p-6 rounded-lg hover:transform hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-xl font-bold text-valorant-light mb-2">
                {item.title}
              </h3>
              <p className="text-valorant-gray text-sm mb-4">{item.date}</p>
              <p className="text-valorant-light">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;