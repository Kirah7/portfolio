import React, { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../ui/dialog";
import { Calendar, Award, ExternalLink } from "lucide-react";

interface CertificationCardProps {
  title?: string;
  organization?: string;
  date?: string;
  logo?: string;
  description?: string;
  credentialId?: string;
  credentialUrl?: string;
  skills?: string[];
}

const CertificationCard = ({
  title = "ISTQB Certified Tester",
  organization = "International Software Testing Qualifications Board",
  date = "June 2023",
  logo = "https://api.dicebear.com/7.x/avataaars/svg?seed=istqb",
  description = "Foundation Level certification demonstrating knowledge of fundamental testing concepts, terminology, and practices in software quality assurance.",
  credentialId = "CT-2023-06789",
  credentialUrl = "https://example.com/verify/CT-2023-06789",
  skills = [
    "Test Planning",
    "Test Analysis",
    "Test Design",
    "Test Execution",
    "Test Reporting",
  ],
}: CertificationCardProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(true);

  return (
    <>
      <Card className="w-[300px] h-[250px] overflow-hidden transition-all duration-300 hover:shadow-md bg-white border border-[#f8e1e7] rounded-lg">
        <CardHeader className="p-4 pb-2 flex flex-row items-center gap-3 border-b border-[#f8e1e7]">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-[#f3f0ff] flex items-center justify-center">
            <img
              src={logo}
              alt={`${organization} logo`}
              className="w-8 h-8 object-contain"
            />
          </div>
          <div className="flex-1 overflow-hidden">
            <h3 className="text-sm font-medium text-[#6b4d57] truncate">
              {title}
            </h3>
            <p className="text-xs text-[#9e8c94] truncate">{organization}</p>
          </div>
        </CardHeader>

        <CardContent className="p-4 pt-3">
          <div className="flex items-center text-xs text-[#9e8c94] mb-2">
            <Calendar className="w-3 h-3 mr-1" />
            <span>{date}</span>
          </div>
          <p className="text-xs text-[#6b4d57] line-clamp-3">{description}</p>
        </CardContent>

        <CardFooter className="p-4 pt-0 flex justify-between items-center">
          <div className="flex gap-1 flex-wrap">
            {skills.slice(0, 2).map((skill, index) => (
              <Badge
                key={index}
                variant="outline"
                className="text-[0.65rem] bg-[#fdf4f6] text-[#d4a1b9] border-[#f8e1e7] px-2 py-0"
              >
                {skill}
              </Badge>
            ))}
            {skills.length > 2 && (
              <Badge
                variant="outline"
                className="text-[0.65rem] bg-[#fdf4f6] text-[#d4a1b9] border-[#f8e1e7] px-2 py-0"
              >
                +{skills.length - 2}
              </Badge>
            )}
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="text-xs text-[#d4a1b9] hover:text-[#b27a9b] hover:bg-[#fdf4f6] p-0 h-auto"
            onClick={() => setIsDialogOpen(true)}
          >
            Details
          </Button>
        </CardFooter>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-white border border-[#f8e1e7] p-6 max-w-md rounded-lg">
          <DialogHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-[#f3f0ff] flex items-center justify-center">
                <img
                  src={logo}
                  alt={`${organization} logo`}
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div>
                <DialogTitle className="text-lg font-medium text-[#6b4d57]">
                  {title}
                </DialogTitle>
                <DialogDescription className="text-sm text-[#9e8c94]">
                  {organization}
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>

          <div className="space-y-4">
            <div className="flex items-center text-sm text-[#9e8c94]">
              <Calendar className="w-4 h-4 mr-2" />
              <span>Issued: {date}</span>
            </div>

            <p className="text-sm text-[#6b4d57]">{description}</p>

            <div className="flex items-start gap-2">
              <Award className="w-4 h-4 text-[#9e8c94] mt-0.5" />
              <div>
                <p className="text-sm font-medium text-[#6b4d57]">
                  Credential ID
                </p>
                <p className="text-sm text-[#9e8c94]">{credentialId}</p>
              </div>
            </div>

            {credentialUrl && (
              <div className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-[#9e8c94]" />
                <a
                  href={credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#d4a1b9] hover:text-[#b27a9b] underline"
                >
                  Verify Credential
                </a>
              </div>
            )}

            <div className="pt-2">
              <p className="text-sm font-medium text-[#6b4d57] mb-2">Skills</p>
              <div className="flex gap-1.5 flex-wrap">
                {skills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="text-xs bg-[#fdf4f6] text-[#d4a1b9] border-[#f8e1e7] px-2 py-0.5"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CertificationCard;
