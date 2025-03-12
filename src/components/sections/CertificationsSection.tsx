import React, { useState } from "react";
import { Award, ExternalLink } from "lucide-react";

interface Certification {
  id: string;
  title: string;
  organization: string;
  date: string;
  logo: string;
  description: string;
  credentialUrl?: string;
}

interface CertificationCardProps {
  title: string;
  organization: string;
  date: string;
  logo: string;
}

const CertificationCard: React.FC<CertificationCardProps> = ({
  title = "Certification Title",
  organization = "Organization Name",
  date = "January 2023",
  logo = "https://api.dicebear.com/7.x/avataaars/svg?seed=default",
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden cursor-pointer h-full">
      <div className="p-6 flex flex-col h-full">
        <div className="w-16 h-16 rounded-full overflow-hidden bg-[#F8E1E7] flex items-center justify-center mx-auto mb-4">
          <img
            src={logo}
            alt={`${organization} logo`}
            className="w-12 h-12 object-contain"
          />
        </div>
        <h3 className="text-lg font-medium text-[#6D6875] text-center mb-2">
          {title}
        </h3>
        <div className="text-center mt-auto">
          <p className="text-[#B5838D] font-medium">{organization}</p>
          <p className="text-[#6D6875] text-sm">{date}</p>
        </div>
      </div>
    </div>
  );
};

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen = false,
  onClose = () => {},
  title = "Modal Title",
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-4 border-b border-[#F8E1E7] flex justify-between items-center">
          <h3 className="text-xl font-medium text-[#D8A1AD]">{title}</h3>
          <button
            onClick={onClose}
            className="text-[#6D6875] hover:text-[#B5838D] transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div className="overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

interface CertificationsSectionProps {
  certifications?: Certification[];
  title?: string;
  subtitle?: string;
}

const CertificationsSection: React.FC<CertificationsSectionProps> = ({
  certifications = [
    {
      id: "2",
      title: "Software Testing Certification",
      organization: "Eduonix Learning Solution",
      date: "2025",
      logo: "https://api.dicebear.com/7.x/icons/svg?seed=certification",
      description:
        "Gained foundational knowledge in software testing methodologies, including test planning, execution, and defect tracking. Developed skills in manual testing, QA processes, and bug reporting to ensure software quality.",
      credentialUrl: "https://www.eduonix.com/certificate/b3625f8c65",
    },
  ],
  title = "Certifications",
  subtitle = "Professional qualifications and achievements",
}) => {
  const [selectedCertification, setSelectedCertification] =
    useState<Certification | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCertificationClick = (certification: Certification) => {
    setSelectedCertification(certification);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCertification(null);
  };

  return (
    <section id="certifications" className="py-16 px-4 md:px-8 bg-[#FFF5F7]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-light text-[#D8A1AD] mb-3"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            {title}
          </h2>
          <p className="text-[#6D6875] text-lg">{subtitle}</p>
          <div className="w-24 h-1 bg-[#E8C2CA] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="flex justify-center">
          {certifications.map((certification) => (
            <div
              key={certification.id}
              onClick={() => handleCertificationClick(certification)}
            >
              <CertificationCard
                title={certification.title}
                organization={certification.organization}
                date={certification.date}
                logo={certification.logo}
              />
            </div>
          ))}
        </div>

        {selectedCertification && (
          <Modal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            title={selectedCertification.title}
          >
            <div className="p-4">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-[#F8E1E7] flex items-center justify-center mr-4">
                  <img
                    src={selectedCertification.logo}
                    alt={`${selectedCertification.organization} logo`}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-[#6D6875]">
                    {selectedCertification.organization}
                  </h3>
                  <p className="text-[#B5838D] text-sm">
                    {selectedCertification.date}
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-[#6D6875] leading-relaxed">
                  {selectedCertification.description}
                </p>
              </div>

              {selectedCertification.credentialUrl && (
                <a
                  href={selectedCertification.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#B5838D] hover:text-[#D8A1AD] transition-colors"
                >
                  <Award className="w-4 h-4 mr-2" />
                  View Credential
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              )}
            </div>
          </Modal>
        )}
      </div>
    </section>
  );
};

export default CertificationsSection;
