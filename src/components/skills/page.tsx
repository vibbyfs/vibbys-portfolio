"use client";
import React from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import SectionHeader from '@/components/ui/SectionHeader';

export default function Skills() {
  return (
    <section id="skills" className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
  <SectionHeader title="Skills" id="skills" />

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="language">
            <AccordionTrigger>Language</AccordionTrigger>
            <AccordionContent>
              <p className="text-sm">JavaScript</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="front-end">
            <AccordionTrigger>Front End</AccordionTrigger>
            <AccordionContent>
              <ul className="flex flex-wrap gap-2 mt-2">
                <li className="px-3 py-1 rounded bg-slate-100 text-sm">React JS</li>
                <li className="px-3 py-1 rounded bg-slate-100 text-sm">Redux</li>
                <li className="px-3 py-1 rounded bg-slate-100 text-sm">React Native</li>
                <li className="px-3 py-1 rounded bg-slate-100 text-sm">HTML</li>
                <li className="px-3 py-1 rounded bg-slate-100 text-sm">CSS</li>
                <li className="px-3 py-1 rounded bg-slate-100 text-sm">TailwindCSS</li>
                <li className="px-3 py-1 rounded bg-slate-100 text-sm">Apollo Client</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="back-end">
            <AccordionTrigger>Back End</AccordionTrigger>
            <AccordionContent>
              <ul className="flex flex-wrap gap-2 mt-2">
                <li className="px-3 py-1 rounded bg-slate-100 text-sm">Node JS</li>
                <li className="px-3 py-1 rounded bg-slate-100 text-sm">Express</li>
                <li className="px-3 py-1 rounded bg-slate-100 text-sm">Sequelize</li>
                <li className="px-3 py-1 rounded bg-slate-100 text-sm">PostgreSQL</li>
                <li className="px-3 py-1 rounded bg-slate-100 text-sm">GraphQL</li>
                <li className="px-3 py-1 rounded bg-slate-100 text-sm">Apollo Server</li>
                <li className="px-3 py-1 rounded bg-slate-100 text-sm">MongoDB</li>
                <li className="px-3 py-1 rounded bg-slate-100 text-sm">Redis</li>
                <li className="px-3 py-1 rounded bg-slate-100 text-sm">REST API</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
