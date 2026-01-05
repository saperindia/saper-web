import React from 'react';
import { PROJECTS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const ServicesList: React.FC = () => {
  return (
    <section id="services" className="w-full py-24 md:py-48 bg-saper-surface border-t border-saper-black/10 overflow-hidden">
      <div className="max-w-[95%] mx-auto px-6 md:px-12">

        {/* Header Section */}
        <div className="mb-20 md:mb-32">
          <div className="flex items-baseline gap-4 mb-6 md:mb-8">
            <span className="font-mono text-xs text-saper-primary font-bold">02</span>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-saper-black/40">Portfolio</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-extrabold leading-[0.9] tracking-tighter text-saper-black mb-8 md:mb-12 max-w-4xl">
            Your vision,<br />our mission
          </h2>
          <p className="text-lg md:text-xl text-saper-gray leading-relaxed font-medium max-w-2xl">
            From 3000kVA Servo Stabilizers to GW-scale Solar Farms, we deliver precision across every industrial phase.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">

          {/* Large Featured Card - Spans 8 columns */}
          <div className="md:col-span-8 group relative overflow-hidden rounded-2xl bg-saper-border border border-saper-black/10 hover:shadow-xl transition-all duration-500 cursor-pointer min-h-[500px] md:min-h-[600px]"
          >
            <div className="absolute inset-0">
              <img
                src={PROJECTS[0].image}
                alt={PROJECTS[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-saper-black/80 via-saper-black/40 to-transparent"></div>
            </div>

            <div className="relative z-10 p-8 md:p-12 h-full flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <span className="font-mono text-sm font-bold text-white/60 group-hover:text-saper-primary transition-colors">
                  {PROJECTS[0].id}
                </span>
                <span className="font-mono text-xs font-semibold text-white/70 uppercase tracking-[0.2em]">
                  {PROJECTS[0].subtitle}
                </span>
              </div>

              <div>
                <h3 className="text-5xl md:text-7xl font-extrabold text-white mb-6 group-hover:translate-x-2 transition-transform duration-500 leading-[0.9] tracking-tighter">
                  {PROJECTS[0].title}
                </h3>
                <p className="text-white/80 text-lg md:text-xl max-w-2xl mb-6 leading-relaxed font-medium">
                  {PROJECTS[0].description}
                </p>
                <div className="flex items-center gap-2 text-white/60 group-hover:text-saper-primary group-hover:gap-4 transition-all">
                  <span className="text-sm font-bold uppercase tracking-wider">Explore</span>
                  <ArrowUpRight className="w-5 h-5" strokeWidth={2.5} />
                </div>
              </div>
            </div>
          </div>

          {/* Vertical Card - Spans 4 columns */}
          <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-saper-border border border-saper-black/10 hover:shadow-xl transition-all duration-500 cursor-pointer min-h-[500px] md:min-h-[600px]">
            <div className="absolute inset-0">
              <img
                src={PROJECTS[1].image}
                alt={PROJECTS[1].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-saper-black/80 via-saper-black/40 to-transparent"></div>
            </div>

            <div className="relative z-10 p-8 md:p-10 h-full flex flex-col justify-between">
              <div>
                <span className="font-mono text-sm font-bold text-white/60 group-hover:text-saper-primary transition-colors inline-block mb-4">
                  {PROJECTS[1].id}
                </span>
                <span className="block font-mono text-xs font-semibold text-white/70 uppercase tracking-[0.2em] mb-6">
                  {PROJECTS[1].subtitle}
                </span>
              </div>

              <div>
                <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-4 group-hover:translate-x-2 transition-transform duration-500 leading-[0.9] tracking-tighter">
                  {PROJECTS[1].title}
                </h3>
                <p className="text-white/70 text-base md:text-lg leading-relaxed font-medium mb-4">
                  {PROJECTS[1].description}
                </p>
                <ArrowUpRight className="w-5 h-5 text-white/60 group-hover:text-saper-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" strokeWidth={2.5} />
              </div>
            </div>
          </div>

          {/* Three Medium Cards - Each spans 4 columns */}
          {PROJECTS.slice(2, 5).map((project, index) => (
            <div
              key={project.id}
              className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-saper-border border border-saper-black/10 hover:shadow-xl transition-all duration-500 cursor-pointer min-h-[400px]"
            >
              <div className="absolute inset-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-saper-black/80 via-saper-black/40 to-transparent"></div>
              </div>

              <div className="relative z-10 p-6 md:p-8 h-full flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="font-mono text-xs font-bold text-white/60 group-hover:text-saper-primary transition-colors">
                    {project.id}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-white/50 group-hover:text-saper-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" strokeWidth={2.5} />
                </div>

                <div>
                  <span className="block font-mono text-[10px] font-semibold text-white/60 uppercase tracking-[0.2em] mb-3">
                    {project.subtitle}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-3 group-hover:translate-x-1 transition-transform duration-500 leading-[0.95] tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-white/70 text-sm md:text-base leading-relaxed font-medium line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}

        </div>

        {/* Bottom Divider */}
        <div className="mt-20 md:mt-32 pt-12 md:pt-16 border-t border-saper-black/10">
          <div className="flex justify-between items-center">
            <p className="text-saper-black/40 text-sm md:text-base font-medium">
              Trusted by industries since 2010
            </p>
            <div className="h-px w-24 bg-saper-black/10"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesList;