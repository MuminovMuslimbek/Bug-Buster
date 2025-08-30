"use client";

import React from "react";
import Header from "@/components/Header";
import Team from "@/components/Team";
import Image from "next/image";
import Volunteer1 from '@/../public/volunteer1.jpg'
import Volunteer2 from '@/../public/volunteer2.webp'

export default function page() {
    return (
        <div className="bg-[#01172C] min-h-screen text-white flex flex-col">
            {/* Hero / Biz haqimizda section */}
            <section className="pb-10 pt-30 px-4">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
                    {/* Matn chap tomonda */}
                    <div className="md:w-1/2">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Biz haqimizda</h1>
                        <p className="text-lg md:text-xl text-gray-300">
                            Bug Buster jamoasi dasturlash, texnologiyalar va onlayn innovatsiyalar sohasida faoliyat yuritadi.
                            Bizning maqsadimiz – foydalanuvchilar uchun qulay va samarali mahsulotlar yaratish.
                        </p>
                    </div>

                    {/* Rasm o'ng tomonda */}
                    <div className="md:w-1/2 relative w-full h-64 md:h-80 lg:h-96">
                        <Image
                            src={Volunteer1}
                            alt="Biz haqimizda rasm"
                            className="object-cover rounded-xl"
                            priority
                        />
                    </div>
                </div>
            </section>

            {/* Missiya section */}
            <section className="py-10 px-4">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
                    {/* Rasm chap tomonda */}
                    <div className="md:w-1/2 relative w-full h-64 md:h-80 lg:h-96">
                        <Image
                            src={Volunteer2}
                            alt="Bizning missiya rasm"
                            className="object-cover rounded-xl"
                            priority
                        />
                    </div>

                    {/* Matn o'ng tomonda */}
                    <div className="md:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Bizning Missiyamiz</h2>
                        <p className="text-lg text-gray-200">
                            Bug Buster orqali biz har bir foydalanuvchiga o‘z bilimini oshirish, muammolarni tez va samarali hal qilish imkoniyatini taqdim etamiz.
                        </p>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <Team />
        </div>
    );
}
