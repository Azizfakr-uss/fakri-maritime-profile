import { Mail, MapPin, Calendar } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

export const CVHeader = () => {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1),transparent)]" />
      </div>
      
      <div className="container relative mx-auto px-6 py-16">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-12">
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-accent opacity-75 blur-md" />
            <img
              src={profilePhoto}
              alt="Aziz Abdul Fakri"
              className="relative h-48 w-48 rounded-full border-4 border-white object-cover shadow-2xl"
            />
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <h1 className="mb-2 text-5xl font-bold tracking-tight">
              Aziz Abdul Fakri
            </h1>
            <p className="mb-6 text-xl font-medium text-primary-foreground/90">
              Maritime Professional
            </p>
            
            <div className="flex flex-col gap-3 text-primary-foreground/80 md:flex-row md:gap-6">
              <div className="flex items-center justify-center gap-2 md:justify-start">
                <Calendar className="h-5 w-5" />
                <span>Sukoharjo, 29 Maret 2006</span>
              </div>
              <div className="flex items-center justify-center gap-2 md:justify-start">
                <MapPin className="h-5 w-5" />
                <span>Indonesia</span>
              </div>
              <div className="flex items-center justify-center gap-2 md:justify-start">
                <Mail className="h-5 w-5" />
                <a href="mailto:azizfakr@gmail.com" className="hover:text-accent transition-elegant">
                  azizfakr@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
    </header>
  );
};
