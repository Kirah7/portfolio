import React from "react";
import { Card } from "../ui/card";
import { Separator } from "../ui/separator";

interface AboutSectionProps {
  title?: string;
  subtitle?: string;
  bio?: string;
  photoUrl?: string;
  professionalSummary?: string[];
}

const AboutSection = ({
  title = "About Me",
  subtitle = "Software Test Engineer | Manual QA Tester",
  bio = "I’m a Software Test Engineer with almost one year of experience in manual software testing, ensuring applications meet quality standards before release. My experience includes writing and executing test cases, reporting and tracking defects, performing functional and regression testing, and working closely with developers to resolve issues. I’m detail-oriented, eager to learn, and committed to delivering reliable, high-quality software that provides a great user experience. I’m always looking for opportunities to expand my skills and contribute to building better products.",
   photoUrl = '/ky2.jpeg',

  professionalSummary = [
    "Manual Testing – Writing and executing test cases",
    "Bug Tracking – Using Jira for issue reporting",
    "UI/UX Testing – Ensuring user-friendly applications",
    "Agile & QA Processes – Understanding workflows and best practices",
    "Excited to keep learning and improving! 🚀",
  ],
}: AboutSectionProps) => {
  return (
    <section id="about" className="py-16 px-4 md:px-8 bg-[#FFF5F7]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light text-center mb-3 font-['Playfair_Display',_serif] text-[#D8A7B1]">
          {title}
        </h2>
        <Separator className="w-24 h-0.5 mx-auto mb-10 bg-[#E6BBD0]" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-xl md:text-2xl mb-4 font-medium text-[#9D8189]">
              {subtitle}
            </h3>
            <p className="text-[#6D6875] mb-6 leading-relaxed">{bio}</p>

            <Card className="p-6 bg-white/80 border-[#E6BBD0] shadow-sm rounded-lg">
              <h4 className="text-lg font-medium mb-4 text-[#9D8189]">
                Professional Summary
              </h4>
              <ul className="space-y-2">
                {professionalSummary.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#E6BBD0] mr-2">•</span>
                    <span className="text-[#6D6875]">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img
                src={photoUrl}
                alt="Professional headshot"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border-8 border-[#F8E1E7] rounded-full opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
