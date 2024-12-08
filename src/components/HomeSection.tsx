import { useInView } from "react-intersection-observer";

const HomeSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
        <source src="/val-back.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-valorant-dark/70 to-valorant-dark" />
      <div
        ref={ref}
        className={`relative z-10 text-center transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-6xl md:text-8xl font-bold mb-4 animate-fade-in-up">
          TEAM QUINCY
        </h1>
        <p
          className="text-xl md:text-2xl text-valorant-gray animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Rising to the top of Valorant competitive scene
        </p>
        <div className="mt-8 space-y-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <p className="text-lg text-valorant-light">Join us in our journey to excellence</p>
          <a
            href="#about"
            className="inline-block bg-valorant-red px-6 py-3 rounded-lg text-white font-semibold hover:bg-valorant-red/90 transition-colors"
          >
            Discover More
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;