import React from 'react';
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-[#2D2F2E] text-[#F0F0D7] min-h-screen">
      {/* Hero Section */}
      <header className="bg-[#3C3F3E] text-[#F0F0D7] py-20 text-center">
        <h1 className="text-4xl font-bold">Marcel Brard</h1>
        <p className="text-lg mt-2">IT Engineer and Full Stack Developer</p>
      </header>

      {/* Dynamic Sections */}
      <section className="py-16 px-8">
        <h2 className="text-2xl font-bold text-center text-[#AAB99A] mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example Project Cards */}
          <a
            href="https://github.com/Mumoide/Medical-AID"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#727D73] text-[#F0F0D7] h-40 rounded-lg shadow-md flex items-center justify-center hover:shadow-lg transition-shadow"
          >
            Medical AID 🩺
          </a>

          <div className="bg-[#AAB99A] text-[#2D2F2E] h-40 rounded-lg shadow-md flex items-center justify-center">
          Prep & Plate 🥗
          </div>
          <div className="bg-[#F0F0D7] text-[#2D2F2E] h-40 rounded-lg shadow-md flex items-center justify-center">
            Project 3
          </div>
        </div>
      </section>

      <section className="py-16 px-8 bg-[#3C3F3E] text-[#F0F0D7]">
        <h2 className="text-2xl font-bold text-center text-[#AAB99A] mb-8">Developed Web Apps</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example App Cards */}

          <div className="bg-[#727D73] text-[#F0F0D7] h-40 rounded-lg shadow-md flex items-center justify-center">
            <Link href="/todo" className="w-full h-full flex items-center justify-center text-center font-bold hover:underline">
              To-Do List App ✍️📚
            </Link>
          </div>

          <div className="bg-[#F0F0D7] text-[#2D2F2E] h-40 rounded-lg shadow-md flex items-center justify-center">
            <Link href="/passwordcheck" className="w-full h-full flex items-center justify-center text-center font-bold hover:underline">
            Password Security Checker 🔒
            </Link>
          </div>
          <div className="bg-[#AAB99A] text-[#2D2F2E] h-40 rounded-lg shadow-md flex items-center justify-center">
            <Link href="/weatherforcastapp" className="w-full h-full flex items-center justify-center text-center font-bold hover:underline">
              Weather Forecast App 🌤️
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
