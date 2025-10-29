import { Quote } from "lucide-react";

export const MottoSection = () => {
  return (
    <div className="maritime-pattern relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 p-8 shadow-elegant md:p-12">
      <div className="absolute right-8 top-8 opacity-10">
        <Quote className="h-24 w-24 text-primary" />
      </div>
      
      <div className="relative">
        <h3 className="mb-4 text-2xl font-bold text-foreground">Motto Hidup</h3>
        <blockquote className="space-y-4 text-lg leading-relaxed text-foreground/90">
          <p className="text-2xl font-semibold text-primary">
            "10% yang terjadi padamu, dan 90% bagaimana kamu bereaksi terhadapnya"
          </p>
        </blockquote>
      </div>
    </div>
  );
};
