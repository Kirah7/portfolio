import React from "react";
import { Badge } from "../ui/badge";
import { Progress } from "../ui/progress";
import { Separator } from "../ui/separator";
import {
  Code,
  Database,
  FileSearch,
  GitBranch,
  Globe,
  Layout,
  Server,
  Terminal,
  TestTube,
} from "lucide-react";

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  skills: Skill[];
}

interface Skill {
  name: string;
  proficiency: number;
}

interface SkillsSectionProps {
  categories?: SkillCategory[];
  title?: string;
  subtitle?: string;
}

const SkillsSection = ({
  categories = [
    {
      name: "Testing Tools",
      icon: <TestTube className="h-5 w-5 text-pink-400" />,
      skills: [
        { name: "Selenium", proficiency: 90 },
        { name: "Cypress", proficiency: 85 },
        { name: "JUnit", proficiency: 80 },
        { name: "TestNG", proficiency: 75 },
      ],
    },
    {
      name: "Automation",
      icon: <Terminal className="h-5 w-5 text-purple-400" />,
      skills: [
        { name: "Python", proficiency: 85 },
        { name: "JavaScript", proficiency: 80 },
        { name: "Java", proficiency: 75 },
        { name: "Robot Framework", proficiency: 70 },
      ],
    },
    {
      name: "API Testing",
      icon: <Globe className="h-5 w-5 text-pink-400" />,
      skills: [
        { name: "Postman", proficiency: 90 },
        { name: "REST Assured", proficiency: 85 },
        { name: "SoapUI", proficiency: 75 },
        { name: "Swagger", proficiency: 70 },
      ],
    },
    {
      name: "Performance Testing",
      icon: <Server className="h-5 w-5 text-purple-400" />,
      skills: [
        { name: "JMeter", proficiency: 85 },
        { name: "LoadRunner", proficiency: 75 },
        { name: "Gatling", proficiency: 70 },
        { name: "K6", proficiency: 65 },
      ],
    },
    {
      name: "Database Testing",
      icon: <Database className="h-5 w-5 text-peach-400" />,
      skills: [
        { name: "SQL", proficiency: 85 },
        { name: "MongoDB", proficiency: 75 },
        { name: "PostgreSQL", proficiency: 70 },
        { name: "Oracle", proficiency: 65 },
      ],
    },
    {
      name: "Test Management",
      icon: <FileSearch className="h-5 w-5 text-pink-400" />,
      skills: [
        { name: "JIRA", proficiency: 90 },
        { name: "TestRail", proficiency: 85 },
        { name: "qTest", proficiency: 75 },
        { name: "Zephyr", proficiency: 70 },
      ],
    },
    {
      name: "UI/UX Testing",
      icon: <Layout className="h-5 w-5 text-purple-400" />,
      skills: [
        { name: "Accessibility Testing", proficiency: 80 },
        { name: "Cross-browser Testing", proficiency: 85 },
        { name: "Responsive Design Testing", proficiency: 80 },
        { name: "Visual Regression Testing", proficiency: 75 },
      ],
    },
  ],
  title = "Skills",
  subtitle = "My technical expertise and proficiency levels in various testing domains",
}: SkillsSectionProps) => {
  return (
    <section id="skills" className="py-16 px-4 md:px-8 lg:px-16 bg-pink-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-3">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-serif ml-2 text-gray-800">
                  {category.name}
                </h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-700">{skill.name}</span>
                      <Badge
                        variant="outline"
                        className="bg-gradient-to-r from-pink-100 to-purple-100 text-gray-700 border-pink-200"
                      >
                        {skill.proficiency}%
                      </Badge>
                    </div>
                    <Progress
                      value={skill.proficiency}
                      className="h-2 bg-gray-100"
                      indicatorClassName="bg-gradient-to-r from-pink-300 to-purple-300"
                    />
                    {skillIndex < category.skills.length - 1 && (
                      <Separator className="my-3 bg-gray-100" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
