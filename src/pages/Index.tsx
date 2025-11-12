import { CVHeader } from "@/components/CVHeader";
import { CVSection } from "@/components/CVSection";
import { EducationItem } from "@/components/EducationItem";
import { ExperienceCard } from "@/components/ExperienceCard";
import { CertificationBadge } from "@/components/CertificationBadge";
import { HobbyCard } from "@/components/HobbyCard";
import { MottoSection } from "@/components/MottoSection";
import { GraduationCap, Briefcase, Award, Heart, Music, Palmtree, Trophy } from "lucide-react";

const Index = () => {
  return (
    <div className="maritime-pattern min-h-screen">
      <CVHeader />
      
      <main className="container mx-auto px-6 py-12">
        {/* Education */}
        <CVSection title="Riwayat Pendidikan" icon={GraduationCap}>
          <div className="grid gap-4">
            <EducationItem school="SMA Negeri 1 Polokarto" level="Sekolah Menengah Atas" />
            <EducationItem school="SMP Negeri 3 Polokarto" level="Sekolah Menengah Pertama" />
            <EducationItem school="SD Negeri 1 Kemasan" level="Sekolah Dasar" />
          </div>
        </CVSection>

        {/* Work Experience */}
        <CVSection title="Pengalaman Kerja" icon={Briefcase}>
          <ExperienceCard />
        </CVSection>

        {/* Certifications */}
        <CVSection title="Sertifikasi" icon={Award}>
          <div className="grid gap-6 md:grid-cols-2">
            <CertificationBadge
              name="BST (Basic Safety Training)"
              description="Sertifikasi keselamatan dasar yang mencakup pelatihan penyelamatan diri, pencegahan kebakaran, pertolongan pertama dasar, dan keselamatan pribadi dan tanggung jawab sosial di kapal."
            />
            <CertificationBadge
              name="AFF (Advanced Fire Fighting)"
              description="Sertifikasi lanjutan pemadaman kebakaran yang memberikan kemampuan untuk mengorganisir dan melatih pemadam kebakaran, serta mengendalikan operasi pemadaman kebakaran di kapal."
            />
            <CertificationBadge
              name="Sertifikat Terkait Penanganan Barang Berbahaya (IMDG Code)"
              description="Sertifikasi untuk menangani, menyimpan, dan mengangkut barang berbahaya sesuai dengan standar internasional IMDG Code dalam operasi maritim."
            />
            <CertificationBadge
              name="Sertifikat Safe Stevedoring Management"
              description="Sertifikasi manajemen bongkar muat yang aman, mencakup prosedur keselamatan kerja pelabuhan, penanganan kargo, dan supervisi operasi stevedoring."
            />
          </div>
        </CVSection>

        {/* Hobbies */}
        <CVSection title="Hobi & Minat" icon={Heart}>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
            <HobbyCard icon={Palmtree} title="Traveling ke Alam" />
            <HobbyCard icon={Music} title="Mendengarkan Musik" />
            <HobbyCard icon={Heart} title="Eksplorasi" />
          </div>
        </CVSection>

        {/* Life Motto */}
        <MottoSection />
      </main>
      
      <footer className="border-t border-border bg-card py-8 text-center">
        <p className="text-sm text-muted-foreground">
          © 2025 Aziz Abdul Fakri. Maritime Professional.
        </p>
      </footer>
    </div>
  );
};

export default Index;
