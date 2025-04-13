
import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  stars: number;
}

const TestimonialCard = ({ name, role, content, stars }: TestimonialCardProps) => {
  return (
    <div className="testimonial-card">
      <div className="flex items-center mb-2">
        {Array.from({ length: stars }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-ai-gold text-ai-gold" />
        ))}
      </div>
      <p className="text-sm mb-4">{content}</p>
      <div>
        <p className="font-semibold text-ai-gold">{name}</p>
        <p className="text-xs opacity-80">{role}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
