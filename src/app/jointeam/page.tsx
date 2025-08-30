"use client";

import React, { useState } from "react";

interface FormData {
    fullname: string;
    email: string;
    phone: string;
    skills: string;
    github: string;
    motivation: string;
    imageFile: File | null;
    imageUrl: string;
}

const JoinForm: React.FC = () => {
    const [form, setForm] = useState<FormData>({
        fullname: "",
        email: "",
        phone: "",
        skills: "",
        github: "",
        motivation: "",
        imageFile: null,
        imageUrl: "",
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setForm({ ...form, imageFile: file });
        setErrors({ ...errors, imageFile: "" });
    };

    const validate = () => {
        const newErrors: { [key: string]: string } = {};
        if (!form.fullname) newErrors.fullname = "To‘liq ism talab qilinadi";
        if (!form.email) newErrors.email = "Email talab qilinadi";
        if (!form.phone) newErrors.phone = "Telefon raqam talab qilinadi";
        if (!form.skills) newErrors.skills = "Ko‘nikmalar talab qilinadi";
        if (!form.github) newErrors.github = "Github/Portfolio talab qilinadi";
        if (!form.motivation) newErrors.motivation = "Motivatsiya talab qilinadi";
        if (!form.imageFile && !form.imageUrl) newErrors.image = "Rasm URL yoki fayl kiritilishi kerak";
        return newErrors;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        console.log("Form submitted:", form);
        alert("Form successfully submitted!");
        setForm({
            fullname: "",
            email: "",
            phone: "",
            skills: "",
            github: "",
            motivation: "",
            imageFile: null,
            imageUrl: "",
        });
        // keyin API endpointga yuborish
    };

    return (
        <section className="flex items-center justify-center bg-[#01172C] py-12 mt-16 px-4">
            <div className="max-w-6xl w-full grid md:grid-cols-2">
                {/* Video qismi */}
                <div className="w-full h-64 md:h-[500px] lg:h-[800px] relative">
                    <video
                        src="/join.mp4"
                        autoPlay
                        loop
                        muted
                        className="w-full h-full object-cover rounded-tl-xl rounded-tr-xl md:rounded-bl-xl md:rounded-tr-none shadow-lg"
                    />
                </div>

                {/* Form qismi */}
                <div
                    className="bg-white rounded-bl-xl rounded-br-xl md:rounded-tr-xl md:rounded-bl-none shadow-xl p-6 md:p-8 lg:p-10 text-gray-900
             md:max-h-[500px] lg:max-h-[800px] md:overflow-y-auto"
                >
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-[#011932]">Bug Buster jamoasiga qo‘shilish</h2>
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

                        {/* Phone */}
                        <div>
                            <label className="block mb-1 font-medium">Telefon raqam</label>
                            <input
                                type="text"
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                placeholder="+998 (00) 000 00 00"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#011932] outline-none"
                            />
                            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                        </div>

                        {/* Skills */}
                        <div>
                            <label className="block mb-1 font-medium">Dasturlash ko‘nikmalari / Qiziqishlar</label>
                            <input
                                type="text"
                                name="skills"
                                value={form.skills}
                                onChange={handleChange}
                                placeholder="Masalan: JavaScript, React, Python"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#011932] outline-none"
                            />
                            {errors.skills && <p className="text-red-500 text-sm mt-1">{errors.skills}</p>}
                        </div>

                        {/* Github */}
                        <div>
                            <label className="block mb-1 font-medium">Github / Portfolio havolasi</label>
                            <input
                                type="text"
                                name="github"
                                value={form.github}
                                onChange={handleChange}
                                placeholder="Masalan: https://github.com/username"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#011932] outline-none"
                            />
                            {errors.github && <p className="text-red-500 text-sm mt-1">{errors.github}</p>}
                        </div>

                        {/* Motivation */}
                        <div>
                            <label className="block mb-1 font-medium">Motivatsiyangiz / Qiziqishingiz</label>
                            <textarea
                                name="motivation"
                                value={form.motivation}
                                onChange={handleChange}
                                rows={4}
                                placeholder="Nima uchun Bug Buster jamoasiga qo‘shilmoqchisiz?"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#011932] outline-none resize-none"
                            />
                            {errors.motivation && <p className="text-red-500 text-sm mt-1">{errors.motivation}</p>}
                        </div>

                        {/* Image */}
                        <div>
                            <label className="block mb-1 font-medium">Rasm (URL yoki Fayl)</label>
                            <div className="flex gap-2 items-center">
                                <input
                                    type="url"
                                    name="imageUrl"
                                    value={form.imageUrl}
                                    onChange={handleChange}
                                    placeholder="Rasm URL"
                                    className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#011932] outline-none"
                                />
                                <label className="bg-[#011932] text-white px-4 py-2 rounded-md cursor-pointer hover:bg-[#021e3b] transition">
                                    Upload
                                    <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
                                </label>
                            </div>
                            {(errors.image || form.imageFile || form.imageUrl) && (
                                <p className="text-red-500 text-sm mt-1">{errors.image}</p>
                            )}
                            {/* Preview */}
                            {form.imageFile && (
                                <img
                                    src={URL.createObjectURL(form.imageFile)}
                                    alt="Preview"
                                    className="mt-2 w-32 h-32 object-cover rounded-md border"
                                />
                            )}
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full bg-[#011932] text-white font-semibold py-3 rounded-md hover:bg-[#021e3b] cursor-pointer transition"
                        >
                            Qo‘shilish
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default JoinForm;
