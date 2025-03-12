import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Calendar,
  Building,
  Briefcase,
} from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string;
  projects: Project[];
  isExpanded?: boolean;
}

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
}

interface ExperienceSectionProps {
  experiences?: Experience[];
  title?: string;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  experiences = [
    {
      id: "1",
      company: "Pamantasan ng Lungsod ng Muntinlupa (PLMun)",
      position:
        "Software Tester (Bloodlink: A Mobile-Based Hybrid Blood Bank For Red Cross Muntinlupa Chapter)",
      duration: "May 2024 - March 2025",
      description:
        "Conducted end-to-end testing for BloodLink: A Mobile-Based Hybrid Blood Bank system, ensuring seamless donor-recipient matching and efficient blood donation management. Tracked and reported defects using JIRA and managed test cases and workflow using Trello, improving system efficiency and usability.",
      projects: [
        {
          id: "101",
          title: "BloodLink: Mobile Blood Bank System",
          description:
            "Performed functional, UI, and usability testing to ensure system reliability and accessibility.",
          technologies: ["Manual Testing", "JIRA", "Trello", "Android Testing"],
          image:
            "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        },
      ],
      isExpanded: false,
    },
    {
      id: "2",
      company: "Foundever",
      position: "Technical Support Representative",
      duration: "Nov 2024 - Jan 2025",
      description:
        "Handled product inquiries, billing concerns, customer retention, upselling, technical support, troubleshooting, and sales of new services.",
      projects: [
        {
          id: "201",
          title: "Technical Support",
          description:
            "Provided technical support and troubleshooting for customers.",
          technologies: [
            "Customer Service",
            "Technical Support",
            "Troubleshooting",
          ],
          image:
            "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        },
      ],
      isExpanded: false,
    },
    {
      id: "3",
      company: "Alorica Inc.",
      position: "Customer Service Representative",
      duration: "Sept 2023 - Sept 2024",
      description:
        "Handled inbound calls, assisted with prescription drug plans, resolved healthcare-related issues, and documented interactions in CRM. Consistently exceeded performance targets and collaborated on process improvements.",
      projects: [
        {
          id: "301",
          title: "Healthcare Customer Support",
          description:
            "Assisted customers with healthcare-related inquiries and prescription drug plans.",
          technologies: ["Customer Service", "CRM", "Healthcare Support"],
          image:
            "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        },
      ],
      isExpanded: false,
    },
  ],
  title = "Experience",
}) => {
  const [expandedExperiences, setExpandedExperiences] = useState<
    Record<string, boolean>
  >({});

  const toggleExperience = (id: string) => {
    setExpandedExperiences((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="experience" className="py-16 px-4 md:px-8 bg-[#FFF5F7]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light text-center mb-12 font-serif text-[#D8A1AD]">
          {title}
        </h2>

        <div className="space-y-8">
          {experiences.map((experience) => {
            const isExpanded = expandedExperiences[experience.id] || false;

            return (
              <Card
                key={experience.id}
                className="overflow-hidden border-[#F3D7E0] bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                    <div>
                      <h3 className="text-xl font-medium text-[#9D7A8C]">
                        {experience.position}
                      </h3>
                      <div className="flex items-center mt-1 text-gray-600">
                        <Building size={16} className="mr-2 text-[#D8A1AD]" />
                        <span>{experience.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center mt-2 md:mt-0 text-gray-500">
                      <Calendar size={16} className="mr-2 text-[#D8A1AD]" />
                      <span>{experience.duration}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{experience.description}</p>

                  <Button
                    variant="ghost"
                    className="flex items-center text-[#9D7A8C] hover:text-[#D8A1AD] hover:bg-[#FFF5F7] transition-colors"
                    onClick={() => toggleExperience(experience.id)}
                  >
                    {isExpanded ? (
                      <>
                        <span>Hide Projects</span>
                        <ChevronUp size={16} className="ml-2" />
                      </>
                    ) : (
                      <>
                        <span>View Projects</span>
                        <ChevronDown size={16} className="ml-2" />
                      </>
                    )}
                  </Button>
                </div>

                {isExpanded && (
                  <div className="px-6 pb-6">
                    <Separator className="my-4 bg-[#F3D7E0]" />
                    <h4 className="text-lg font-medium mb-4 text-[#9D7A8C] flex items-center">
                      <Briefcase size={18} className="mr-2 text-[#D8A1AD]" />
                      Projects
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {experience.projects.map((project) => (
                        <div
                          key={project.id}
                          className="bg-white rounded-lg overflow-hidden border border-[#F3D7E0] shadow-sm"
                        >
                          <div className="h-48 overflow-hidden">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                            />
                          </div>
                          <div className="p-4">
                            <h5 className="text-lg font-medium text-[#9D7A8C] mb-2">
                              {project.title}
                            </h5>
                            <p className="text-gray-600 text-sm mb-3">
                              {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech, index) => (
                                <span
                                  key={index}
                                  className="px-2 py-1 text-xs rounded-full bg-[#FFF5F7] text-[#9D7A8C]"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
