"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Download, Menu, Youtube } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-sm" : "py-6"
    }`}>
      <div className="max-w-screen-xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative overflow-hidden rounded-full w-10 h-10 flex items-center justify-center bg-gradient-to-br from-red-500 to-red-700 shadow-lg transition-transform duration-300 group-hover:scale-110">
              <img 
                src="/assets/icon.png" 
                alt="YT Full Browser Mode" 
                className="w-7 h-7 object-contain" 
              />
            </div>
            <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-500">YT Full Mode</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            {[
              { href: "#features", label: "Features" },
              { href: "#demo", label: "Demo" },
              { href: "#faq", label: "FAQ" }
            ].map((item) => (
              <Link 
                key={item.href} 
                href={item.href} 
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:bg-red-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-bottom-right hover:after:origin-bottom-left"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center gap-3">
              <Link href="#demo">
                <Button variant="outline" size="sm" className="rounded-full gap-2 px-4 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/20">
                  <Youtube className="h-4 w-4" />
                  <span>Demo</span>
                </Button>
              </Link>
              <Link href="https://github.com/murathanje/YT_Full_Browser_Extension" target="_blank">
                <Button size="sm" className="rounded-full gap-2 px-4 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 transition-all shadow-md hover:shadow-xl">
                  <Download className="h-4 w-4" />
                  <span>Download</span>
                </Button>
              </Link>
            </div>
          </nav>

          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon" className="rounded-full w-10 h-10">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex items-center gap-3 mt-8 mb-8">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center">
                  <img 
                    src="/assets/icon.png" 
                    alt="YT Full Browser Mode" 
                    className="w-7 h-7" 
                  />
                </div>
                <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-500">YT Full Mode</span>
              </div>
              
              <nav className="flex flex-col gap-6">
                {[
                  { href: "#features", label: "Features" },
                  { href: "#demo", label: "Demo" },
                  { href: "#faq", label: "FAQ" }
                ].map((item) => (
                  <Link 
                    key={item.href} 
                    href={item.href} 
                    className="text-lg font-medium hover:text-red-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="flex flex-col gap-3 mt-4">
                  <Link href="#demo">
                    <Button variant="outline" className="w-full rounded-lg gap-2 justify-center">
                      <Youtube className="h-4 w-4" />
                      <span>Watch Demo</span>
                    </Button>
                  </Link>
                  <Link href="https://github.com/murathanje/YT_Full_Browser_Extension" target="_blank">
                    <Button className="w-full rounded-lg gap-2 justify-center bg-gradient-to-r from-red-600 to-red-500">
                      <Download className="h-4 w-4" />
                      <span>Download</span>
                    </Button>
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
} 