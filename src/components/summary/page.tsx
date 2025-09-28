
import React from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import SectionHeader from '@/components/ui/SectionHeader';

export default function Summary() {
    return (
        <section id="summary" className="py-12 px-4">
            <div className="max-w-4xl mx-auto">
                <SectionHeader title="Professional Summary" id="summary" />

                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="summary">
                        <AccordionTrigger>Summary</AccordionTrigger>
                        <AccordionContent>
                            <p className="text-sm md:text-base">
                                Professional with experience in logistics, warehouse, and administration, now expanding into software
                                development after completing a Fullstack JavaScript Immersive bootcamp. Skilled in data analytics
                                (Excel, SQL, Tableau) and modern web technologies (JavaScript, React, Node.js), combining operational
                                expertise with technical skills to build efficient, data-driven solutions.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
}