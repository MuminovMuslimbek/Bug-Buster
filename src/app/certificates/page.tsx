"use client";

import React from "react";
import Image from "next/image";
import certificates from "@/data/certificates.json";
import { Certificate } from "@/types/certificate";

const CertificatePage: React.FC = () => {
  // Yangi sanaga qarab sortlash (eng yangisi yuqorida)
  const sorted = (certificates as Certificate[]).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <section className="pt-10 pb-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Sertifikatlar</h2>

        <div className="space-y-10">
          {sorted.map((cert) => (
            <div
              key={cert.id}
              className="relative rounded-2xl shadow-lg overflow-hidden border bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white"
            >
              {/* Sana banneri */}
              <div className="absolute top-0 right-0 bg-black/50 px-4 py-2 text-sm rounded-bl-2xl">
                {new Date(cert.date).toLocaleDateString("uz-UZ", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>

              {/* Kontent */}
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-6">{cert.event}</h3>

                {/* Participants */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                  {cert.participants.map((p) => (
                    <div
                      key={p.id}
                      className="flex flex-col items-center bg-white/20 rounded-xl p-4 shadow hover:scale-105 transition"
                    >
                      <div className="w-20 h-20 relative mb-3">
                        <Image
                          src={p.image}
                          alt={p.name}
                          fill
                          className="rounded-full object-cover border-2 border-white"
                        />
                      </div>
                      <p className="text-sm font-medium">{p.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatePage;
