import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

interface CVSectionProps {
  title: string;
  icon: LucideIcon;
  children: ReactNode;
}

export const CVSection = ({ title, icon: Icon, children }: CVSectionProps) => {
  return (
    <section className="mb-12">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-primary-foreground shadow-elegant">
          <Icon className="h-6 w-6" />
        </div>
        <h2 className="text-3xl font-bold text-foreground">{title}</h2>
      </div>
      <div className="ml-0 md:ml-15">{children}</div>
    </section>
  );
};
