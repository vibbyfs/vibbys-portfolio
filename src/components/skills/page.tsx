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
                <li className="px-3 py-1 rounded bg-[#f4f2ee] border-2 border:black text-sm">React JS</li>
                <li className="px-3 py-1 rounded bg-[#f4f2ee] border-2 border:black text-sm">NEXT JS</li>
                <li className="px-3 py-1 rounded bg-[#f4f2ee] border-2 border:black">React Native</li>
                <li className="px-3 py-1 rounded bg-[#f4f2ee] border-2 border:black">HTML</li>
                <li className="px-3 py-1 rounded bg-[#f4f2ee] border-2 border:black">CSS</li>
                <li className="px-3 py-1 rounded bg-[#f4f2ee] border-2 border:black">TailwindCSS</li>
                <li className="px-3 py-1 rounded bg-[#f4f2ee] border-2 border:black">Apollo Client</li>
                <li className="px-3 py-1 rounded bg-[#f4f2ee] border-2 border:black">Axios</li>
                <li className="px-3 py-1 rounded bg-[#f4f2ee] border-2 border:black">Redux</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="back-end">
            <AccordionTrigger>Back End</AccordionTrigger>
            <AccordionContent>
              <ul className="flex flex-wrap gap-2 mt-2">
                <li className="px-3 py-1 rounded bg-[#f4f2ee] border-2 border:black">Node JS</li>
                <li className="px-3 py-1 rounded bg-[#f4f2ee] border-2 border:black">Express</li>
                <li className="px-3 py-1 rounded bg-[#f4f2ee] border-2 border:black">Apollo Server</li>
                <li className="px-3 py-1 rounded bg-[#f4f2ee] border-2 border:black">REST API</li>
                <li className="px-3 py-1 rounded bg-[#f4f2ee] border-2 border:black">GraphQL</li>
                <li className="px-3 py-1 rounded bg-[#f4f2ee] border-2 border:black">Sequelize</li>
                <li className="px-3 py-1 rounded bg-[#f4f2ee] border-2 border:black">Mongoose</li>
                <li className="px-3 py-1 rounded bg-[#f4f2ee] border-2 border:black">PostgreSQL</li>
                <li className="px-3 py-1 rounded bg-[#f4f2ee] border-2 border:black">MongoDB</li>
                <li className="px-3 py-1 rounded bg-[#f4f2ee] border-2 border:black">Redis</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
