
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-muted py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left font-montserrat font-medium"
      >
        <span>{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-ai-teal" />
        ) : (
          <ChevronDown className="h-5 w-5 text-ai-teal" />
        )}
      </button>
      {isOpen && (
        <div className="mt-2 text-sm opacity-80">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQItem;
