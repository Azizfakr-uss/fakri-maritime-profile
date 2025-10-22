import { LucideIcon } from "lucide-react";

interface HobbyCardProps {
  icon: LucideIcon;
  title: string;
}

export const HobbyCard = ({ icon: Icon, title }: HobbyCardProps) => {
  return (
    <div className="group flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-6 shadow-card transition-elegant hover:border-secondary hover:shadow-elegant">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-secondary to-primary text-white transition-transform group-hover:scale-110">
        <Icon className="h-8 w-8" />
      </div>
      <p className="text-center font-semibold text-foreground">{title}</p>
    </div>
  );
};
