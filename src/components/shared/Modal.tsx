import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { X } from "lucide-react";

interface ModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  title?: string;
  description?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
}

const Modal = ({
  isOpen = true,
  onClose = () => {},
  title = "Modal Title",
  description = "Modal description goes here providing additional information about the content.",
  children = <div className="p-4 text-center">Modal content goes here</div>,
  footer = (
    <Button
      variant="default"
      onClick={() => {}}
      className="bg-[#f8c4b4] hover:bg-[#e5b1a2] text-black"
    >
      Close
    </Button>
  ),
}: ModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white border border-[#f8c4b4] rounded-lg shadow-md max-w-md w-full p-0 overflow-hidden">
        <div className="absolute right-4 top-4 rounded-full p-1 hover:bg-[#f8e4e0] transition-colors">
          <X
            className="h-4 w-4 text-gray-500 cursor-pointer"
            onClick={onClose}
          />
        </div>

        <DialogHeader className="p-6 border-b border-[#f8e4e0]">
          <DialogTitle className="text-xl font-medium text-[#d291bc] font-serif">
            {title}
          </DialogTitle>
          {description && (
            <DialogDescription className="text-sm text-gray-600 mt-1">
              {description}
            </DialogDescription>
          )}
        </DialogHeader>

        <div className="p-6 bg-[#fdf6f6]">{children}</div>

        {footer && (
          <DialogFooter className="p-4 bg-white border-t border-[#f8e4e0] flex justify-end space-x-2">
            {footer}
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
