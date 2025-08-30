"use client";

import React from "react";
import Image from "next/image";
import Atropos from "atropos/react";
import "atropos/css";

import type { Project } from "@/types/projects";
import projectsData from "@/data/projects.json";

export default function ProjectsPage() {
    // JSON ichidagi status string bo‘lgani uchun casting qildik
    const projects: Project[] = projectsData.map((p) => ({
        ...p,
        status: p.status as "upcoming" | "past",
    }));

    const upcoming = projects.filter((p) => p.status === "upcoming");
    const past = projects.filter((p) => p.status === "past");

    return (
        <section className="py-12 bg-[#01172C] pt-30 min-h-screen">
            <div className="container mx-auto px-4">
                <h1 className="text-2xl md:text-3xl font-bold text-center mb-12 text-white">
                    📅 Loyihalar & Tadbirlar
                </h1>

                {/* Rejalashtirilgan */}
                <div className="mb-16">
                    <h2 className="text-2xl font-semibold text-white mb-6">
                        🔜 Rejalashtirilgan tadbirlar
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {upcoming.length > 0 ? (
                            upcoming.map((project) => (
                                <Atropos
                                    key={project.id}
                                    className="my-atropos cursor-pointer"
                                    activeOffset={40}
                                    shadowScale={1.05}
                                    rotateXMax={15}
                                    rotateYMax={15}
                                >
                                    <div className="h-full bg-[#011932] max-w-[400px] w-full rounded-xl overflow-hidden border border-[#0a2746] shadow-lg transition-transform duration-300 flex flex-row md:flex-col">
                                        <div
                                            className="relative w-32 h-auto md:w-full md:h-48 flex-shrink-0"
                                            data-atropos-offset="5"
                                        >
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="p-4 flex flex-col justify-center">
                                            <h3
                                                className="text-base md:text-lg font-semibold text-white mb-2"
                                                data-atropos-offset="10"
                                            >
                                                {project.title}
                                            </h3>
                                            <p
                                                className="text-xs md:text-sm text-gray-300 mb-1"
                                                data-atropos-offset="12"
                                            >
                                                📍 {project.location}
                                            </p>
                                            <p
                                                className="text-xs md:text-sm text-gray-400"
                                                data-atropos-offset="15"
                                            >
                                                ⏳ {project.time} • 📅 {project.year}
                                            </p>
                                        </div>
                                    </div>
                                </Atropos>
                            ))
                        ) : (
                            <p className="text-gray-400">
                                🚧 Hozircha rejalashtirilgan tadbir yo‘q
                            </p>
                        )}
                    </div>
                </div>

                {/* O‘tgan */}
                <div>
                    <h2 className="text-2xl font-semibold text-white mb-6">
                        ✅ O‘tkazilgan tadbirlar
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {past.length > 0 ? (
                            past.map((project) => (
                                <Atropos
                                    key={project.id}
                                    className="my-atropos cursor-pointer"
                                    activeOffset={40}
                                    shadowScale={1.05}
                                    rotateXMax={15}
                                    rotateYMax={15}
                                >
                                    <div className="h-full bg-[#011932] rounded-xl overflow-hidden border border-[#0a2746] shadow-lg transition-transform duration-300 flex flex-row md:flex-col">
                                        <div
                                            className="relative w-32 h-auto md:w-full md:h-48 flex-shrink-0"
                                            data-atropos-offset="5"
                                        >
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="p-4 flex flex-col justify-center">
                                            <h3
                                                className="text-base md:text-lg font-semibold text-white mb-2"
                                                data-atropos-offset="10"
                                            >
                                                {project.title}
                                            </h3>
                                            <p
                                                className="text-xs md:text-sm text-gray-300 mb-1"
                                                data-atropos-offset="12"
                                            >
                                                📍 {project.location}
                                            </p>
                                            <p
                                                className="text-xs md:text-sm text-gray-400"
                                                data-atropos-offset="15"
                                            >
                                                ⏳ {project.time} • 📅 {project.year}
                                            </p>
                                        </div>
                                    </div>
                                </Atropos>
                            ))
                        ) : (
                            <p className="text-gray-400">📭 O‘tkazilgan tadbirlar yo‘q</p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
