"use client"

import { P, H1, MUTE } from '@/styles/typography'
import { Button } from "@/components/ui/button"
import React, { useState } from 'react';

export default function Writing() {

  const articles = [
    { title: "The Evolution of UI Design in Startups", date: "01-15-2023" },
    { title: "Integrating Minimalism in UI Design", date: "02-20-2023" },
    { title: "UX Tips for SaaS Platforms", date: "03-05-2023" },
    { title: "The Role of Color Theory in UI", date: "04-10-2023" },
    { title: "Designing for Accessibility in Startups", date: "05-15-2023" },
  ];

  return (
    <div className="flex flex-col items-start w-full space-y-1">
      {articles.map((article, index) => (
        <Button key={index} variant="link" className="p-0 w-full">
          <div className="flex justify-between items-center w-full">
            <MUTE text={article.title} />
            <div className="grow" />
            <div className="flex-1 text-right">
              <MUTE text={article.date} />
            </div>
          </div>
        </Button>
      ))}
    </div>
  );
}
