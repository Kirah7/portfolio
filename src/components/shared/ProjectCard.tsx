import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

export interface ProjectCardProps {
  id?: string;
  title?: string;
  description?: string;
  image?: string;
  technologies?: string[];
  role?: string;
  duration?: string;
  responsibilities?: string[];
  achievements?: string[];
  link?: string;
}

const ProjectCard = ({
  id = "project-1",
  title = "Test Automation Framework",
  description = "Developed a comprehensive test automation framework for a web application using Selenium and JavaScript.",
  image = "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  technologies = ["Selenium", "JavaScript", "Jest", "CI/CD"],
  role = "Lead Test Engineer",
  duration = "Jan 2022 - Jun 2022",
  responsibilities = [
    "Designed and implemented test automation architecture",
    "Created reusable test components and utilities",
    "Integrated tests with CI/CD pipeline",
  ],
  achievements = [
    "Reduced manual testing time by 70%",
    "Improved test coverage by 45%",
    "Decreased regression testing cycle from 3 days to 4 hours",
  ],
  link = "#",
}: ProjectCardProps) => {
  const [expanded, setExpanded] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <Card className="w-full max-w-[350px] h-auto bg-white border border-[#f8e1e7] shadow-sm rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300">
      <div className="relative w-full h-[160px] overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-medium text-[#333] font-sans">
          {title}
        </CardTitle>
        <CardDescription className="text-[#666]">{duration}</CardDescription>
      </CardHeader>

      <CardContent className="pb-2">
        <p className="text-sm text-[#555] mb-3">{description}</p>

        <div className="flex flex-wrap gap-2 mb-3">
          {technologies.map((tech, index) => (
            <span
              key={`${id}-tech-${index}`}
              className="px-2 py-1 text-xs rounded-full bg-[#f8e1e7] text-[#d4688a]"
            >
              {tech}
            </span>
          ))}
        </div>

        {expanded && (
          <div className="mt-3 text-sm text-[#555]">
            <p className="font-medium mb-1">Role: {role}</p>

            <p className="font-medium mt-2 mb-1">Key Responsibilities:</p>
            <ul className="list-disc pl-5 mb-2">
              {responsibilities.map((item, index) => (
                <li key={`${id}-resp-${index}`}>{item}</li>
              ))}
            </ul>

            <p className="font-medium mt-2 mb-1">Achievements:</p>
            <ul className="list-disc pl-5">
              {achievements.map((item, index) => (
                <li key={`${id}-ach-${index}`}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>

      <CardFooter className="flex justify-between pt-0">
        <Button
          variant="ghost"
          size="sm"
          className="text-[#d4688a] hover:text-[#b84e6e] hover:bg-[#fdf2f5]"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? (
            <>
              <ChevronUp className="mr-1 h-4 w-4" />
              Show Less
            </>
          ) : (
            <>
              <ChevronDown className="mr-1 h-4 w-4" />
              Show More
            </>
          )}
        </Button>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="border-[#d4688a] text-[#d4688a] hover:bg-[#fdf2f5] hover:text-[#b84e6e]"
            >
              View Details
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-white max-w-[600px] p-6 rounded-lg">
            <DialogHeader>
              <DialogTitle className="text-2xl font-medium text-[#333] font-sans">
                {title}
              </DialogTitle>
              <DialogDescription className="text-[#666]">
                {duration} • {role}
              </DialogDescription>
            </DialogHeader>

            <div className="mt-4">
              <img
                src={image}
                alt={title}
                className="w-full h-[250px] object-cover rounded-md mb-4"
              />

              <p className="text-[#555] mb-4">{description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {technologies.map((tech, index) => (
                  <span
                    key={`${id}-modal-tech-${index}`}
                    className="px-2 py-1 text-xs rounded-full bg-[#f8e1e7] text-[#d4688a]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mb-4">
                <h4 className="font-medium text-[#333] mb-2">
                  Key Responsibilities:
                </h4>
                <ul className="list-disc pl-5 text-[#555]">
                  {responsibilities.map((item, index) => (
                    <li key={`${id}-modal-resp-${index}`} className="mb-1">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="font-medium text-[#333] mb-2">Achievements:</h4>
                <ul className="list-disc pl-5 text-[#555]">
                  {achievements.map((item, index) => (
                    <li key={`${id}-modal-ach-${index}`} className="mb-1">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {link && (
                <Button
                  variant="outline"
                  className="mt-2 border-[#d4688a] text-[#d4688a] hover:bg-[#fdf2f5] hover:text-[#b84e6e]"
                  onClick={() => window.open(link, "_blank")}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Visit Project
                </Button>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
