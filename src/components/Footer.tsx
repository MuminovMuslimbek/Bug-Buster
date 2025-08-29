"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from '@/../public/logo.png'
import { JSX } from "react";
import Instagram from "@/../public/instagram.svg";
import Telegram from "@/../public/telegram.svg";

export interface FooterColumn {
    title: string;
    links: { label: string; href: string }[];
}

const columns: FooterColumn[] = [
    {
        title: "Bug Buster",
        links: [
            { label: "Jamoa a'zolari", href: "/team" },
            { label: "Loyihalar", href: "/projects" },
            { label: "Tadbirlar", href: "/events" },
            { label: "Qo‘shilish", href: "/join" },
            { label: "Mukofotlar", href: "/awards" },
            { label: "Haqida", href: "/about" },
        ],
    },
    {
        title: "Hamjamiyatimiz",
        links: [
            { label: "Blog", href: "/blog" },
            { label: "Foto galereya", href: "/photos" },
            { label: "Video loyihalar", href: "/videos" },
            { label: "Logotip va materiallar", href: "/assets" },
            { label: "Missiyamiz", href: "/mission" },
            { label: "Ambassadorlar", href: "/ambassadors" },
            { label: "Karyera", href: "/careers" },
        ],
    },
    {
        title: "Ma'lumot",
        links: [
            { label: "Yordam markazi", href: "/help" },
            { label: "Xavfsizlik", href: "/safety" },
            { label: "Tez-tez so‘raladigan savollar", href: "/faq" },
            { label: "Sug‘urta", href: "/insurance" },
            { label: "Javob kafolati", href: "/guarantee" },
            { label: "Foydalanish shartlari", href: "/terms" },
            { label: "Ma’lumot va maxfiylik siyosati", href: "/privacy" },
        ],
    },
];

export default function Footer(): JSX.Element {
    return (
        <footer className="bg-[#011a33]/90 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
                    {/* Logo + qisqacha izoh */}
                    <div className="flex flex-col gap-4 md:w-1/4">
                        <div className="flex-shrink-0">
                            <Link href="/">
                                <Image src={Logo} alt="bugbuster.uz" className="h-10 w-10" />
                            </Link>
                        </div>
                        <p className="text-gray-300 text-sm">
                            Bug Buster jamoasi sizga dasturlash va IT sohasidagi qiziqarli loyihalarni taqdim etadi.
                        </p>
                        <div className="flex space-x-3 mt-4 md:mt-auto">
                            <a href="https://www.instagram.com/musl.imbek_008" target="_blank" rel="noopener noreferrer">
                                <Image src={Instagram} alt="Instagram" width={28} height={28} className="rounded" />
                            </a>
                            <a href="https://t.me/bug_buster_challenge" target="_blank" rel="noopener noreferrer">
                                <Image src={Telegram} alt="Telegram" width={28} height={28} className="rounded" />
                            </a>
                        </div>
                    </div>

                    {/* Footer kolonkalari */}
                    <div className="flex flex-col sm:flex-row md:w-3/4 justify-between gap-8">
                        {columns.map((col) => (
                            <div key={col.title} className="flex flex-col">
                                <h3 className="font-semibold mb-4">{col.title}</h3>
                                <ul className="space-y-2">
                                    {col.links.map((ln) => (
                                        <li key={ln.label}>
                                            <Link href={ln.href} className="hover:text-gray-300 transition">
                                                {ln.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pastki qism */}
                <div className="mt-8 border-t border-white/20 pt-4 text-center text-gray-400 text-sm">
                    © {new Date().getFullYear()} bugbuster.uz  |  All rights reserved.
                </div>
            </div>
        </footer>
    );
}
