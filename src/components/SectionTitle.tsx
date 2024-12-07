import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  className?: string;
}

const SectionTitle = ({ title, className }: SectionTitleProps) => {
  return (
    <div className={cn("w-full text-center mb-12", className)}>
      <h2 className="text-4xl md:text-5xl font-bold text-valorant-light animate-fade-in-up">
        {title}
      </h2>
      <div className="w-24 h-1 bg-valorant-red mx-auto mt-4 animate-slide-in" />
    </div>
  );
};

export default SectionTitle;