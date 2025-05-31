
import React from 'react';
import { Card } from '@/components/ui/card';

interface TestimonialCardProps {
  name: string;
  photo: string;
  testimonial: string;
  result: string;
}

const TestimonialCard = ({ name, photo, testimonial, result }: TestimonialCardProps) => {
  return (
    <Card className="p-6 border-2 border-soft-pink shadow-lg">
      <div className="flex items-start space-x-4">
        <div className="w-16 h-16 bg-gradient-to-br from-hot-pink to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
          {name.charAt(0)}
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-lg text-gray-800 mb-2">{name}</h4>
          <p className="text-gray-600 mb-3 italic">"{testimonial}"</p>
          <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold inline-block">
            {result}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TestimonialCard;
