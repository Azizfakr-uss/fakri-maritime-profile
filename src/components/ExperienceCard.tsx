import cevaImage from "@/assets/ceva-logistics.jpg";

export const ExperienceCard = () => {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-elegant hover:shadow-elegant">
      <div className="relative h-64 overflow-hidden">
        <img
          src={cevaImage}
          alt="Ceva Logistics"
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-2xl font-bold text-white">Ceva Logistics</h3>
          <p className="text-lg text-white/90">Shipping Agent Intern</p>
        </div>
      </div>
      
      <div className="p-6">
        <p className="leading-relaxed text-foreground">
          Selama magang di Ceva Logistics, saya berkesempatan untuk mempelajari dan terlibat langsung 
          dalam operasional pelayaran internasional. Pengalaman ini memberikan pemahaman mendalam tentang 
          dokumentasi kapal, koordinasi dengan berbagai pihak pelabuhan, serta pengelolaan cargo dan 
          logistik maritim. Saya juga belajar mengenai regulasi internasional dalam industri pelayaran 
          dan pentingnya komunikasi yang efektif dalam lingkungan yang dinamis.
        </p>
      </div>
    </div>
  );
};
