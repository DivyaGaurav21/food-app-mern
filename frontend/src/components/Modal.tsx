import { type ReactNode } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative z-10 bg-white rounded-lg p-6 shadow-lg min-w-80">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 cursor-pointer"
        >
          ❌
        </button>

        {children}
      </div>
    </div>
  );
};

export default Modal;