import React from "react";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import { Separator } from "../ui/separator";

interface FooterProps {
  name?: string;
  email?: string;
  socialLinks?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

const Footer = ({
  name = "Jane Doe",
  email = "jane.doe@example.com",
  socialLinks = {
    github: "https://github.com/Kirah7",
    linkedin: "https://www.linkedin.com/in/kyrah-p-b2a669286/",
    instagram: "https://www.instagram.com/khaih._/",
  },
}: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#f8e1e4] py-6 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-600">
              &copy; {currentYear} KYRAH. All rights reserved.
            </p>
          </div>

          <div className="flex items-center space-x-6">
            {socialLinks.github && (
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#d4a1e8] transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            )}
            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#d4a1e8] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            )}
            {socialLinks.instagram && (
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#d4a1e8] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            )}
            {email && (
              <a
                href={`mailto:${email}`}
                className="text-gray-600 hover:text-[#d4a1e8] transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            )}
          </div>
        </div>

        <Separator className="my-4 bg-gray-200" />

        <div className="text-center text-xs text-gray-500">
          <p>Software Testing Professional • Quality Assurance Specialist</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
