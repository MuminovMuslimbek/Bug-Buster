"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import certificates from "@/data/certificates.json";
import { Certificate } from "@/types/certificate";

const Certificates: React.FC = () => {
    // Eng oxirgi 3ta sertifikat
    const latest = (certificates as Certificate[])
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 3);

    return (
        <section className="pt-10 pb-20">
            <div className="container mx-auto px-4">
                {/* Title */}
                <h2 className="text-3xl font-bold text-center mb-10">Sertifikatlar</h2>

                {/* Cards */}
                <div className="grid gap-8 md:grid-cols-3">
                    {latest.map((cert) => (
                        <div
                            key={cert.id}
                            className="relative rounded-2xl shadow-lg overflow-hidden border bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white"
                        >
                            {/* Sana banner */}
                            <div className="absolute top-0 right-0 bg-black/50 px-3 py-1 text-xs rounded-bl-lg">
                                {new Date(cert.date).toLocaleDateString("uz-UZ", {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                })}
                            </div>

                            <div className="p-6">
                                {/* Event nomi */}
                                <h3 className="text-lg font-semibold mb-4">{cert.event}</h3>

                                {/* Participants */}
                                <div className="flex -space-x-3">
                                    {cert.participants.slice(0, 4).map((p) => (
                                        <div
                                            key={p.id}
                                            className="w-10 h-10 relative rounded-full border-2 border-white overflow-hidden"
                                        >
                                            <Image
                                                src={p.image}
                                                alt={p.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    ))}
                                    {cert.participants.length > 4 && (
                                        <span className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-white bg-black/30 text-xs">
                                            +{cert.participants.length - 4}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Button */}
                <div className="flex justify-center mt-10">
                    <Link
                        href="/certificates"
                        className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-lg transition"
                    >
                        Barcha Sertifikatlarni ko‘rish
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Certificates;
