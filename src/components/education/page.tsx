import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import SectionHeader from "@/components/ui/SectionHeader";
import CompanyLogo from "../ui/CompanyLogo";

export default function Education() {
  return (
    <section id="education" className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionHeader title="Education" id="education" />

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="hacktiv8">
            <AccordionTrigger>Hacktiv8 — Jakarta, Indonesia</AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="w-full md:w-36 h-24 bg-white border border-gray-200 rounded-md flex items-center justify-center overflow-hidden">
                  <CompanyLogo src="/company/hacktiv8.webp" alt="Hacktiv8" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">
                    Full Stack JavaScript Immersive Program <a href="https://job-portal-manual.s3.us-east-1.amazonaws.com/Transcript+-+HCK-86+-+Vibby+Febriyan+Sakti.pdf" className="text-blue-600 hover:underline"
                   target="_blank"
                   rel="noopener noreferrer">(Transcript)</a>
                  </p>
                  <p className="text-sm mt-1">May 2025 - September 2025</p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="ibnu-chaldun">
            <AccordionTrigger>
              Universitas Ibnu Chaldun — Jakarta, Indonesia
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="w-full md:w-36 h-24 bg-white border border-gray-200 rounded-md flex items-center justify-center overflow-hidden">
                  <CompanyLogo src="/company/uic.png" alt="UIC" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">
                    Bachelor of Law (GPA 3.19/4.00)
                  </p>
                  <p className="text-sm mt-1">2017 – 2021</p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
