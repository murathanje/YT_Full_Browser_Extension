"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Download, Github, Youtube } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-36 md:pt-44 pb-24 px-4 relative">
      <div className="flex flex-col items-center text-center relative z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
          YouTube <span className="text-red-600">Full Browser</span> Mode
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto">
          Experience YouTube in true full browser mode with advanced video controls and distraction-free viewing.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 mb-16">
          <Link href="https://github.com/murathanje/YT_Full_Browser_Extension" target="_blank">
            <Button size="lg" className="gap-2 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 shadow-md hover:shadow-xl transition-all rounded-full px-8">
              <Download className="h-5 w-5" />
              Download Extension
            </Button>
          </Link>
          <Link href="#demo">
            <Button size="lg" variant="outline" className="gap-2 rounded-full border-red-200 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/20 dark:border-red-800/30 px-8">
              <Youtube className="h-5 w-5" />
              Watch Demo
            </Button>
          </Link>
        </div>
        
        <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-xl shadow-2xl">
          <Image 
            src="/assets/video.gif" 
            alt="YouTube Full Browser Mode Demo" 
            width={1200}
            height={675}
            className="w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
        </div>
        
        <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
          <Github className="h-4 w-4" />
          <span>Open source on <Link href="https://github.com/murathanje/YT_Full_Browser_Extension" className="underline font-medium hover:text-red-600 transition-colors" target="_blank">GitHub</Link></span>
        </div>
      </div>
    </section>
  );
} 