import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";

interface HeaderProps {
  logoText?: string;
  navItems?: Array<{ label: string; href: string }>;
}

const Header = ({
  logoText = "Kyrah",
  navItems = [
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ],
}: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full h-20 bg-[#FFF5F7] shadow-sm z-50">
      <div className="container mx-auto h-full px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a
            href="#"
            className="text-2xl font-semibold text-[#D8A7B1] hover:text-[#B76E79] transition-colors"
          >
            {logoText}
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-[#6D6875] hover:text-[#B76E79] text-sm font-medium transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className="text-[#6D6875] hover:text-[#B76E79] hover:bg-[#F9E6EA]"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[#FFF5F7] shadow-md py-4 px-4 z-50">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-[#6D6875] hover:text-[#B76E79] text-sm font-medium transition-colors py-2 px-4 rounded-md hover:bg-[#F9E6EA]"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
