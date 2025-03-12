import React from "react";
import { Card } from "../ui/card";
import { Separator } from "../ui/separator";
import { GraduationCap, Calendar } from "lucide-react";

interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface EducationSectionProps {
  title?: string;
  subtitle?: string;
  educationItems?: EducationItem[];
}

const EducationSection = ({
  title = "Education",
  subtitle = "My academic journey and qualifications",
  educationItems = [
    {
      degree: "Bachelor of Science in Information Technology",
      institution: "Pamantasan ng Lungsod ng Muntinlupa",
      location: "Población, Muntinlupa City",
      startDate: "2023",
      endDate: "2025",
      description:
        "Focused on software testing and quality assurance. Currently learning manual testing, bug tracking, and exploring automation concepts.",
    },
    {
      degree: "Software Testing Certification",
      institution: "Eduonix learning solution",
      location: "Online",
      startDate: "",
      endDate: "2025",
      description: "Learn software testing certification course",
    },
    {
      degree: "Associate In Computer Technology",
      institution: "University of Pamantasan Lungsod Ng Muntinlupa",
      location: "Población, Muntinlupa City",
      startDate: "",
      endDate: "2023",
      description:
        "Associate in Computer Technology graduate with a passion for software development, troubleshooting, and testing.",
    },
    {
      degree: "Senior High School",
      institution: "Zacarias Aquilizan Highschool",
      location: "General Academic Strand",
      startDate: "2019",
      endDate: "2021",
      description:
        "Graduated with honors. Participated in computer science club and developed interest in software development.",
    },
  ],
}: EducationSectionProps) => {
  return (
    <section id="education" className="py-16 px-4 md:px-8 bg-[#f8f1f5]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-[#9d7989] font-serif mb-2">
            {title}
          </h2>
          <p className="text-[#6d6875] text-lg">{subtitle}</p>
          <div className="w-24 h-1 bg-[#e8b4bc] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="space-y-8">
          {educationItems.map((item, index) => (
            <Card
              key={index}
              className="p-6 border border-[#e8d6df] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-white"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-[#f3d9e2] text-[#9d7989]">
                  <GraduationCap size={24} />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-medium text-[#9d7989]">
                    {item.degree}
                  </h3>
                  <p className="text-[#6d6875] font-medium">
                    {item.institution}
                  </p>
                  <p className="text-[#9d7989] text-sm mb-2">{item.location}</p>

                  <div className="flex items-center text-sm text-[#b794a6] mb-4">
                    <Calendar size={14} className="mr-1" />
                    <span>
                      {item.startDate} - {item.endDate}
                    </span>
                  </div>

                  <Separator className="my-3 bg-[#f3d9e2]" />

                  <p className="text-[#6d6875] text-sm">{item.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
