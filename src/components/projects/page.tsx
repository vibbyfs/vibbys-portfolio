"use client";
import React from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import SectionHeader from '@/components/ui/SectionHeader';

export default function Projects() {
  return (
    <section id="projects" className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
  <SectionHeader title="Projects" id="projects" />

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="rt-care">
            <AccordionTrigger>RT Care — July 2025</AccordionTrigger>
            <AccordionContent>
              <p className="text-sm mt-1">A mobile and web-based platform for community complaints and monthly dues payment within the neighborhood (RT) scope.</p>
              <p className="text-sm font-medium mt-3">Tech stack:</p>
              <ul className="list-disc ml-5 mt-1 text-sm space-y-1">
                <li>Express JS, REST API, Sequelize</li>
                <li>React, Redux, PostgreSQL</li>
                <li>Integration AI, Midtrans</li>
              </ul>
              <p className="text-sm font-medium mt-2">Role: Full Stack Developer</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="heyremindly">
            <AccordionTrigger>HeyRemindly — Aug 2025</AccordionTrigger>
            <AccordionContent>
              <p className="text-sm mt-1">A mobile and web-based platform for sending scheduled reminder messages powered by AI delivered via WhatsApp to one or multiple friends.</p>
              <p className="text-sm font-medium mt-3">Tech stack:</p>
              <ul className="list-disc ml-5 mt-1 text-sm space-y-1">
                <li>Express JS, REST API, Sequelize</li>
                <li>React, Redux, PostgreSQL</li>
                <li>Integration AI, 3rd API Twilio</li>
              </ul>
              <p className="text-sm font-medium mt-2">Role: Full Stack Developer</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="planoria">
            <AccordionTrigger>Planoria — Sep 2025</AccordionTrigger>
            <AccordionContent>
              <p className="text-sm mt-1">A mobile and web based application to be your content buddy. From brainstorming ideas with AI, getting quick feedback on videos, to scheduling and autoposting.</p>
              <p className="text-sm font-medium mt-3">Tech stack:</p>
              <ul className="list-disc ml-5 mt-1 text-sm space-y-1">
                <li>Node.js, Express, Mongoose, MongoDB</li>
                <li>React, Axios, TailwindCSS</li>
                <li>Integration AI, Midtrans, Cloudinary</li>
              </ul>
              <p className="text-sm font-medium mt-2">Role: Full Stack Developer</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
