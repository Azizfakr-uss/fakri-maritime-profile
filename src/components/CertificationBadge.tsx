import { Award } from "lucide-react";

interface CertificationBadgeProps {
  name: string;
  description: string;
}

export const CertificationBadge = ({ name, description }: CertificationBadgeProps) => {
  return (
    <div className="group relative overflow-hidden rounded-xl border-2 border-accent/30 bg-gradient-to-br from-card to-muted p-6 shadow-card transition-elegant hover:border-accent hover:shadow-elegant">
      <div className="absolute right-0 top-0 h-32 w-32 -translate-y-8 translate-x-8 rounded-full bg-accent/10 blur-2xl transition-transform group-hover:scale-150" />
      <div className="relative">
        <div className="mb-3 inline-flex rounded-lg bg-accent/10 p-3">
          <Award className="h-6 w-6 text-accent" />
        </div>
        <h3 className="mb-2 text-xl font-bold text-foreground">{name}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};
