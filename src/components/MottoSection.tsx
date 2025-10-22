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
          <p className="italic">
            "Sebenarnya tidak ada yang perlu dikhawatirkan, Allah memang tidak menjanjikan hidupmu 
            selalu mudah. Tapi, dua kali Allah berjanji bahwa:"
          </p>
          <p className="text-xl font-semibold text-primary">
            "fa inna ma'al 'usri yusroo, inna ma'al usri yusroo"
          </p>
          <p className="text-sm text-muted-foreground">
            (Q.S. Al-Insyirah: 5-6)
          </p>
          <p className="italic">
            Sesungguhnya bersama kesulitan ada kemudahan, sesungguhnya bersama kesulitan ada kemudahan.
          </p>
        </blockquote>
      </div>
    </div>
  );
};
