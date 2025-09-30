"use client";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import SectionHeader from '@/components/ui/SectionHeader';

export default function Certifications() {
  return (
    <section id="certifications" className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionHeader title="Certifications" id="certifications" />

        <Accordion type="single" collapsible className="w-full">
           <AccordionItem value="udemy">
            <AccordionTrigger>
              Hacktiv8 — Fullstack Javascript Immersive
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-sm font-medium">Issued: Sep 2025</p>
              <p className="text-sm mt-1">
                Certificate:{" "}
                <span className="font-mono text-xs">
                 <a
                   href="https://students.hacktiv8.com/certificates/df6da3a4-75b7-48bb-be1b-843c7cf81941"
                   className="text-blue-600 hover:underline"
                   target="_blank"
                   rel="noopener noreferrer"
                 >
                   df6da3a4-75b7-48bb-be1b-843c7cf81941
                 </a>
                </span>
              </p>
              <p className="text-sm mt-1">No expiration date</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="udemy">
            <AccordionTrigger>
              Udemy — The Complete Full-stack Web Development Bootcamp
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-sm font-medium">Issued: March 2025</p>
              <p className="text-sm mt-1">
                Certificate:{" "}
                <span className="font-mono text-xs">
                 <a
                   href="https://www.udemy.com/certificate/UC-d8f76b8f-596a-49c3-96a8-c09cb3f406c6/"
                   className="text-blue-600 hover:underline"
                   target="_blank"
                   rel="noopener noreferrer"
                 >
                   UC-d8f76b8f-596a-49c3-96a8-c09cb3f406c6
                 </a>
                </span>
              </p>
              <p className="text-sm mt-1">No expiration date</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="cisco">
            <AccordionTrigger>
              Cisco Networking Academy — Data Analytics Essentials &amp;
              Introduction to Data Science
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium">
                    Data Analytics Essentials — Issued: May 2024
                  </p>
                  <p className="text-sm mt-1">
                    Certificate:{" "}
                    <span className="font-mono text-xs">
                     <a
                       href="https://www.credly.com/badges/6a942dfd-425b-4aa0-9863-c11b005330ae"
                       className="text-blue-600 hover:underline"
                       target="_blank"
                       rel="noopener noreferrer"
                     >
                       6a942dfd-425b-4aa0-9863-c11b005330ae
                     </a>
                    </span>
                  </p>
                  <p className="text-sm mt-1">No expiration date</p>
                </div>

                <div>
                  <p className="text-sm font-medium">
                    Introduction to Data Science — Issued: May 2024
                  </p>
                  <p className="text-sm mt-1">
                    Certificate:{" "}
                    <span className="font-mono text-xs">
                     <a
                       href="https://www.credly.com/badges/c9c44146-a422-438a-a5f0-22b841acdb99"
                       className="text-blue-600 hover:underline"
                       target="_blank"
                       rel="noopener noreferrer"
                     >
                       c9c44146-a422-438a-a5f0-22b841acdb99
                     </a>
                    </span>
                  </p>
                  <p className="text-sm mt-1">No expiration date</p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
