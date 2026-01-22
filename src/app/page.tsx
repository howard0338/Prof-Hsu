import React from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, Microscope, Users, BookOpen } from 'lucide-react';
import { getHomeData } from '../utils/dataLoader';

export default async function Home() {
  const data = await getHomeData();

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full min-h-[600px] flex items-center bg-gradient-to-br from-slate-50 to-white overflow-hidden">
        {/* Decorative background circle */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-bio-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Hero Text */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="inline-block px-3 py-1 bg-regen-100 text-regen-800 text-sm font-semibold rounded-full border border-regen-200">
              {data.hero.institution}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-bio-900 leading-tight tracking-tight">
              {data.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-lg leading-relaxed">
              {data.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link 
                href="/research"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-bio-800 hover:bg-bio-700 transition-all shadow-lg hover:shadow-xl"
              >
                Our Research
                <ArrowRight className="ml-2 -mr-1" size={20} />
              </Link>
              <Link 
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-slate-300 text-base font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50 hover:text-bio-900 transition-all"
              >
                Join the Lab
              </Link>
            </div>
          </div>

          {/* Hero Image / Illustration Placeholder */}
          <div className="relative h-[400px] w-full rounded-2xl bg-slate-200 overflow-hidden shadow-2xl border-4 border-white transform rotate-1 hover:rotate-0 transition-transform duration-500 hidden lg:block">
             {/* In a real app, use next/image here */}
            <div className="absolute inset-0 bg-gradient-to-t from-bio-900/60 to-transparent z-10" />
            <div className="absolute bottom-6 left-6 z-20 text-white">
              <p className="font-bold text-lg">Lab Group Photo 2024</p>
              <p className="text-sm opacity-90">Innovation starts with people.</p>
            </div>
            <img 
               src="https://picsum.photos/800/600?grayscale" 
               alt="Lab Group" 
               className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Quick Stats / Intro Cards */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-slate-50 rounded-xl hover:shadow-md transition-shadow border border-slate-100">
              <Microscope className="w-10 h-10 text-regen-500 mb-4" />
              <h3 className="text-xl font-bold text-bio-900 mb-2">Research Thrusts</h3>
              <p className="text-slate-600 mb-4">Biomaterials, 3D Printing, Neural Regeneration, and Smart Polymers.</p>
              <Link href="/research" className="text-regen-600 font-medium hover:underline text-sm">Learn more &rarr;</Link>
            </div>
            <div className="p-6 bg-slate-50 rounded-xl hover:shadow-md transition-shadow border border-slate-100">
              <BookOpen className="w-10 h-10 text-bio-600 mb-4" />
              <h3 className="text-xl font-bold text-bio-900 mb-2">Publications</h3>
              <p className="text-slate-600 mb-4">Explore our high-impact work published in top-tier journals.</p>
              <Link href="/publications" className="text-regen-600 font-medium hover:underline text-sm">View list &rarr;</Link>
            </div>
            <div className="p-6 bg-slate-50 rounded-xl hover:shadow-md transition-shadow border border-slate-100">
              <Users className="w-10 h-10 text-indigo-500 mb-4" />
              <h3 className="text-xl font-bold text-bio-900 mb-2">The Team</h3>
              <p className="text-slate-600 mb-4">Meet Prof. Hsu and the talented researchers behind the innovations.</p>
              <Link href="/people" className="text-regen-600 font-medium hover:underline text-sm">Meet us &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Text Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-bio-900 mb-6">{data.intro.heading}</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            {data.intro.content}
          </p>
        </div>
      </section>

      {/* Recent News Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-bio-900">Latest News</h2>
            <Link href="/news" className="text-regen-600 font-medium hover:text-regen-700">
              View Archive &rarr;
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {data.news.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-sm p-6 border border-slate-100 hover:shadow-md transition-all">
                <div className="flex items-center text-sm text-slate-500 mb-3">
                  <Calendar size={16} className="mr-2 text-regen-500" />
                  {item.date}
                </div>
                <h3 className="text-lg font-bold text-bio-800 mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm line-clamp-3 mb-4">
                  {item.summary}
                </p>
                <Link href={`/news/${item.id}`} className="text-sm font-semibold text-regen-600 hover:text-regen-800">
                  Read more
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}