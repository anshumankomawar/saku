"use client"

import { P, H1, H2, H3, MUTE } from '@/styles/typography'
import { Button } from "@/components/ui/button"
import React, { useState } from 'react';
import Writing from '@/app/productpage/writing';
import About from '@/app/productpage/about';
import Image from 'next/image';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function ProductPage() {
  const [activeTab, setActiveTab] = useState(0);

  const selectTab = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

      {/*
      <div className="w-full">
        <AspectRatio ratio={10/2}>
          <Image src="/storm.jpg" alt="Image" className="rounded-md object-cover" fill/>
        </AspectRatio>
      </div>
      */}
  return (
    <div className="flex flex-col items-start grow">
      <div className="w-2/6 pt-4" >
          <H2 text="ShadCN"/>
        <div className="pb-16 pt-2 space-y-4 text-start">
        <MUTE text="Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.
          Get Started"/>
        </div>
      </div>
      <div className="flex flex-row w-full ">
        <div className="sticky top-24 flex flex-col flex-none h-min items-end pr-2 border-r">
          <Button 
            onClick={() => selectTab(0)} 
            variant="link" 
            className={`px-1 pb-2 ${activeTab !== 0 ? 'text-slate-400' : ''} `}> 
            writing 
          </Button>
          <Button 
            onClick={() => selectTab(1)} 
            variant="link" 
            className={`px-1 pb-2 ${activeTab !== 1 ? 'text-slate-400' : ''}`}> 
            about 
          </Button>
          <Button 
            onClick={() => selectTab(2)} 
            variant="link" 
            className={`px-1 pb-2 ${activeTab !== 2 ? 'text-slate-400' : ''}`}> 
            polls 
          </Button>
          <Button 
            onClick={() => selectTab(3)} 
            variant="link" 
            className={`px-1 pb-2 ${activeTab !== 3 ? 'text-slate-400' : ''}`}> 
            ask 
          </Button>
        </div>
        {/*<Separator orientation="vertical" className="sticky top-20 overflow-y-contain"/>*/}
        <div className='grow pl-8'>
        <ScrollArea>
            {activeTab === 0 && <Writing/>}
            {activeTab === 1 && <About/>}
            {activeTab === 2 && <div>Content of Tab 3</div>}
            {activeTab === 3 && <div>Content of Tab 4</div>}
        </ScrollArea>
        </div>
      </div>
    </div>
  );
}
