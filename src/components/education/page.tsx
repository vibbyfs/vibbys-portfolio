import React from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import SectionHeader from '@/components/ui/SectionHeader';

export default function Education() {
  return (
    <section id="education" className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
  <SectionHeader title="Education" id="education" />

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="hacktiv8">
            <AccordionTrigger>Hacktiv8 — Jakarta, Indonesia</AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-muted-foreground">Full Stack JavaScript Immersive Program (Transcript)</p>
              <p className="text-sm mt-1">May 2025 – September 2025</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="ibnu-chaldun">
            <AccordionTrigger>Universitas Ibnu Chaldun — Jakarta, Indonesia</AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-muted-foreground">Bachelor of Law (GPA 3.19/4.00)</p>
              <p className="text-sm mt-1">2017 – 2021</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
