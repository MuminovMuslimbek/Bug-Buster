"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import members from "@/data/team.json";
import { TeamMember } from "@/types/team";

const Team: React.FC = () => {
    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-10">Bizning Jamoa</h2>

                <Swiper
                    spaceBetween={30}
                    slidesPerView={5}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        320: { slidesPerView: 2 },
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 5 },
                    }}
                    modules={[Autoplay]}
                    className="w-full"
                >
                    {(members as TeamMember[]).map((member) => (
                        <SwiperSlide key={member.id} className="flex flex-col items-center">
                            <div className="flex flex-col items-center text-center">
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
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Team;
