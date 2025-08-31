"use client";

import React from "react";
import Image from "next/image";
import members from "@/data/team.json";
import { TeamMember } from "@/types/team";

const TeamPage: React.FC = () => {
    return (
        <section className="py-25">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-10">Bizning Jamoa</h2>

                {/* Grid layout */}
                <div className="grid gap-4 md:gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                    {(members as TeamMember[]).map((member) => (
                        <div
                            key={member.id}
                            className="flex flex-col items-center text-center p-4 rounded-2xl shadow-md hover:shadow-xl transition"
                        >
                            <div className="w-40 h-40 relative mb-4">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="rounded-full object-cover"
                                />
                            </div>
                            <h3 className="text-lg font-semibold">{member.name}</h3>
                            <p className="text-gray-500">{member.role}</p>
                            <p className="mt-1 text-sm text-gray-600">{member.phone}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamPage;
