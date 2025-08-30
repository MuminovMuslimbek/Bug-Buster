"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import Atropos from "atropos/react";
import "atropos/css";

// Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Swiper modules
import { Grid, Pagination, Navigation } from "swiper/modules";

// ✅ Typelar
import type { Project } from "@/types/projects";

// ✅ JSON ma’lumotlarni import qilish
import projectsData from "@/data/projects.json";

export default function Projects() {
    // ❌ const projects: Project[] = projectsData;
    // ✅ To‘g‘ri variant: JSON ichidagi ma’lumotlarni `as Project[]` deb cast qilamiz
    const projects = projectsData as Project[];

    return (
        <section className="py-12 bg-[#01172C]">
            <div className="container mx-auto px-4">
                <h2 className="md:text-3xl text-2xl font-bold text-center mb-10 text-white">
                    📂 Eng so‘ngi loyihalar
                </h2>

                <div className="max-w-6xl mx-auto">
                    <Swiper
                        slidesPerView={4}
                        grid={{
                            rows: 2,
                            fill: "row"
                        }}
                        spaceBetween={20}
                        pagination={{
                            clickable: true,
                            el: ".custom-pagination"
                        }}
                        navigation={{
                            nextEl: ".custom-next",
                            prevEl: ".custom-prev"
                        }}
                        modules={[Grid, Pagination, Navigation]}
                        breakpoints={{
                            320: { slidesPerView: 1, grid: { rows: 4 } },
                            640: { slidesPerView: 2, grid: { rows: 2 } },
                            1024: { slidesPerView: 3, grid: { rows: 2 } },
                            1280: { slidesPerView: 4, grid: { rows: 2 } }
                        }}
                        className="px-5"
                    >
                        {projects.map((project) => (
                            <SwiperSlide key={project.id}>
                                <Atropos
                                    className="my-atropos cursor-pointer"
                                    activeOffset={40}
                                    shadowScale={1.05}
                                    rotateXMax={15}
                                    rotateYMax={15}
                                >
                                    <div className="h-full bg-[#011932] rounded-xl overflow-hidden border border-[#0a2746] shadow-lg transition-transform duration-300 flex flex-row md:flex-col">
                                        {/* Image */}
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

                                        {/* Text */}
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
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom navigation */}
                    <div className="flex items-center justify-center mt-8 space-x-4">
                        <button className="custom-prev border border-[#0a2746] bg-[#011932] hover:bg-[#092849] cursor-pointer text-white p-3 rounded-full">
                            ◀
                        </button>

                        <div className="custom-pagination flex justify-center space-x-2"></div>

                        <button className="custom-next border border-[#0a2746] bg-[#011932] hover:bg-[#092849] cursor-pointer text-white p-3 rounded-full">
                            ▶
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
