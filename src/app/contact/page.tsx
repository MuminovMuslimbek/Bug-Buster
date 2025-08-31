"use client";

import React, { useState } from "react";

interface ContactFormData {
    fullname: string;
    email: string;
    phoneOrTelegram: string;
    message: string;
}

const Contact: React.FC = () => {
    const [form, setForm] = useState<ContactFormData>({
        fullname: "",
        email: "",
        phoneOrTelegram: "",
        message: "",
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const validate = () => {
        const newErrors: { [key: string]: string } = {};
        if (!form.fullname) newErrors.fullname = "To‘liq ism talab qilinadi";
        if (!form.email) newErrors.email = "Email talab qilinadi";
        if (!form.phoneOrTelegram) newErrors.phoneOrTelegram = "Telefon yoki Telegram username talab qilinadi";
        if (!form.message) newErrors.message = "Xabar kiritilishi kerak";
        return newErrors;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        console.log("Contact form submitted:", form);
        alert("Xabaringiz muvaffaqiyatli yuborildi!");
        setForm({
            fullname: "",
            email: "",
            phoneOrTelegram: "",
            message: "",
        });
        // keyin API endpointga yuborish
    };

    return (
        <section className="flex items-center justify-center bg-[#01172C] py-12 mt-16 px-4">
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2">
                {/* Form qismi (chapda desktopda, pastda mobile) */}
                <div
                    className="order-2 md:order-1 bg-white rounded-bl-xl rounded-br-xl md:rounded-tl-xl md:rounded-br-none shadow-xl p-6 md:p-8 lg:p-10 text-gray-900
             md:max-h-[500px] lg:max-h-[800px] md:overflow-y-auto"
                >
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-[#011932]">Biz bilan bog‘laning</h2>
                    <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4 text-sm md:text-base">
                        {/* Fullname */}
                        <div>
                            <label className="block mb-1 font-medium">To‘liq ism</label>
                            <input
                                type="text"
                                name="fullname"
                                value={form.fullname}
                                onChange={handleChange}
                                placeholder="Muslimbek Muminov"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#011932] outline-none"
                            />
                            {errors.fullname && <p className="text-red-500 text-sm mt-1">{errors.fullname}</p>}
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block mb-1 font-medium">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="example@gmail.com"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#011932] outline-none"
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>

                        {/* Phone / Telegram */}
                        <div>
                            <label className="block mb-1 font-medium">Telefon raqam / Telegram username</label>
                            <input
                                type="text"
                                name="phoneOrTelegram"
                                value={form.phoneOrTelegram}
                                onChange={handleChange}
                                placeholder="+998 (00) 000 00 00 / @username"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#011932] outline-none"
                            />
                            {errors.phoneOrTelegram && <p className="text-red-500 text-sm mt-1">{errors.phoneOrTelegram}</p>}
                        </div>

                        {/* Message */}
                        <div>
                            <label className="block mb-1 font-medium">Xabaringiz</label>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                rows={4}
                                placeholder="Xabaringizni shu yerga kiriting..."
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#011932] outline-none resize-none"
                            />
                            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full bg-[#011932] text-white font-semibold py-3 rounded-md hover:bg-[#021e3b] cursor-pointer transition"
                        >
                            Yuborish
                        </button>
                    </form>
                </div>

                {/* Video qismi (o‘ngda desktopda, tepada mobile) */}
                <div className="order-1 md:order-2 w-full h-64 md:h-[500px] lg:h-[800px] relative">
                    <video
                        src="/contact.mp4"
                        autoPlay
                        loop
                        muted
                        className="w-full h-full object-cover rounded-tl-xl rounded-tr-xl md:rounded-br-xl md:rounded-tl-none shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default Contact;
