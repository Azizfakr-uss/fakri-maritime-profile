interface EducationItemProps {
  school: string;
  level: string;
}

export const EducationItem = ({ school, level }: EducationItemProps) => {
  return (
    <div className="group relative mb-4 rounded-xl border border-border bg-card p-6 shadow-card transition-elegant hover:shadow-elegant hover:border-primary/30">
      <div className="absolute left-0 top-0 h-full w-1 rounded-l-xl bg-gradient-to-b from-primary to-secondary opacity-0 transition-elegant group-hover:opacity-100" />
      <h3 className="mb-1 text-xl font-semibold text-foreground">{school}</h3>
      <p className="text-sm text-muted-foreground">{level}</p>
    </div>
  );
};
