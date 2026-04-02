"use client";

import React, { useState } from 'react';
import Link from 'next/link';

interface AccordionItem {
  id: string;
  title: string;
  imageUrl: string;
  link: string;
}

interface AccordionItemProps {
  item: AccordionItem;
  isActive: boolean;
  onMouseEnter: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ item, isActive, onMouseEnter }) => {
  return (
    <Link
      href={item.link}
      className={`
        relative h-[450px] rounded-2xl overflow-hidden cursor-pointer bg-gray-200
        transition-all duration-700 ease-in-out
        ${isActive ? 'w-[400px]' : 'w-[80px]'}
      `}
      onMouseEnter={onMouseEnter}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url('${item.imageUrl}')` }}
      />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

      {/* Caption Text */}
      <span
        className={`
          absolute text-white text-lg font-semibold whitespace-nowrap z-20
          transition-all duration-300 ease-in-out
          ${
            isActive
              ? 'bottom-8 left-1/2 -translate-x-1/2 rotate-0' // Active state: horizontal, bottom-center
              : 'bottom-32 left-1/2 -translate-x-1/2 -rotate-90 origin-center' // Inactive state: vertical
          }
        `}
      >
        {item.title}
      </span>
    </Link>
  );
};

interface KazakhCategoryAccordionProps {
  items: AccordionItem[];
  defaultActiveIndex?: number;
}

export function KazakhCategoryAccordion({ items, defaultActiveIndex = 2 }: KazakhCategoryAccordionProps) {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);

  const handleItemHover = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="w-full">
      <div className="flex flex-row items-center justify-center gap-3 p-4">
        {items.map((item, index) => (
          <AccordionItem
            key={item.id}
            item={item}
            isActive={index === activeIndex}
            onMouseEnter={() => handleItemHover(index)}
          />
        ))}
      </div>
    </div>
  );
}
