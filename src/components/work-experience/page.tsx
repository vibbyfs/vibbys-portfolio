"use client";
import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import CompanyLogo from "@/components/ui/CompanyLogo";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function WorkExperience() {
  return (
    <section id="work" className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionHeader id="work" title="Work Experience" />

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="sumber-rasa-jaya">
            <AccordionTrigger>
              PT Sumber Rasa Jaya - Wicked Pies — Warehouse & Logistics Junior
              Supervisor
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="w-full md:w-36 h-24 bg-white border border-gray-200 rounded-md flex items-center justify-center overflow-hidden">
                  <CompanyLogo
                    src="/company/sumber-rasa-jaya.jpeg"
                    alt="Sumber Rasa Jaya logo"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">
                    Jakarta, Indonesia — Feb 2023 – Oct 2024
                  </p>
                  <ul className="list-disc ml-5 mt-2 text-sm space-y-1">
                    <li>
                      Ensured proper packaging of products in line with quality
                      standards and shipping safety requirements.
                    </li>
                    <li>
                      Coordinated with the Production division to confirm
                      product availability.
                    </li>
                    <li>
                      Collaborated with the Logistics division to manage and
                      schedule product shipments.
                    </li>
                    <li>
                      Reported on the Packing team’s performance to the Manager
                      and documented packaged product quantities as well as
                      stock of unpackaged items.
                    </li>
                  </ul>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="oma-elly">
            <AccordionTrigger>
              Oma Elly — Project Administrator
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="w-full md:w-36 h-24 bg-white border border-gray-200 rounded-md flex items-center justify-center overflow-hidden">
                  <CompanyLogo
                    src="/company/oma-elly.jpeg"
                    alt="Oma Elly logo"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">
                    Jakarta, Indonesia — Oct 2022 - Dec 2022
                  </p>
                  <ul className="list-disc ml-5 mt-2 text-sm space-y-1">
                    <li>
                      Recorded sales and expenses related to the ongoing Bazaar.
                    </li>
                    <li>
                      Ensured sufficient stock of goods to support the Bazaar
                      and verified that products sold aligned with the planned
                      inventory.
                    </li>
                    <li>
                      Prepared profit and loss (P&amp;L) reports for each
                      Bazaar.
                    </li>
                  </ul>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="fore-coffee">
            <AccordionTrigger>
              PT Fore Kopi Indonesia - Fore Coffee — Warehouse & Logistics
              Administrator
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="w-full md:w-36 h-24 bg-white border border-gray-200 rounded-md flex items-center justify-center overflow-hidden">
                  <CompanyLogo
                    src="/company/fore-coffee.jpeg"
                    alt="Fore Coffee logo"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">
                    Jakarta, Indonesia — Oct 2021 – Sep 2022
                  </p>
                  <ul className="list-disc ml-5 mt-2 text-sm space-y-1">
                    <li>
                      Managed warehouse stock, ensuring goods matched system
                      records and inbound/outbound processes were effective and
                      accurate.
                    </li>
                    <li>
                      Planned shipments based on product availability and store
                      demand.
                    </li>
                    <li>
                      Documented and tracked the movement of goods in and out of
                      the warehouse.
                    </li>
                    <li>
                      Coordinated delivery, receipt, and storage of goods.
                    </li>
                  </ul>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="reycom-rds">
            <AccordionTrigger>
              PT Reycom Document Solusi - RDS — Warehouse Administrator
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="w-full md:w-36 h-24 bg-white border border-gray-200 rounded-md flex items-center justify-center overflow-hidden">
                  <CompanyLogo
                    src="/company/reycom-rds.jpeg"
                    alt="Reycom RDS logo"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">
                    Jakarta, Indonesia — Jan 2016 – Oct 2021
                  </p>
                  <ul className="list-disc ml-5 mt-2 text-sm space-y-1">
                    <li>
                      Managed warehouse stock, ensuring goods aligned with
                      system records and inbound/outbound processes ran
                      effectively and accurately.
                    </li>
                    <li>
                      Planned deliveries based on product availability and
                      requests from the Production division.
                    </li>
                    <li>
                      Documented and tracked the movement of goods to and from
                      the warehouse.
                    </li>
                    <li>
                      Ensured warehouse operational documents complied with ISO
                      9001:2015 Quality Management Standards.
                    </li>
                  </ul>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="philocoffee">
            <AccordionTrigger>
              Philocoffee — Sales Administrator
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="w-full md:w-36 h-24 bg-white border border-gray-200 rounded-md flex items-center justify-center overflow-hidden">
                  <CompanyLogo
                    src="/company/philocoffee.jpg"
                    alt="Philocoffee logo"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">
                    Jakarta, Indonesia — Aug 2014 – Oct 2015
                  </p>
                  <ul className="list-disc ml-5 mt-2 text-sm space-y-1">
                    <li>Received customer orders directly and via phone.</li>
                    <li>Provided product information to customers.</li>
                    <li>
                      Managed and organized sales documents, including
                      contracts, invoices, and shipping records.
                    </li>
                    <li>
                      Maintained clear communication with customers to ensure
                      satisfaction with services and products.
                    </li>
                  </ul>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
