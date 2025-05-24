import Link from "next/link";
import { Github } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="py-20 mt-12 px-4 md:px-8">
      <Separator className="mb-12 opacity-50" />
      
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-3 mb-8 md:mb-0">
          <div className="relative overflow-hidden rounded-full w-10 h-10 flex items-center justify-center bg-gradient-to-br from-red-500/90 to-red-700/90">
            <img 
              src="/assets/icon.png" 
              alt="YT Full Browser Mode" 
              className="w-7 h-7 object-contain" 
            />
          </div>
          <span className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-500">YT Full Mode</span>
        </div>
        
        <nav className="flex flex-wrap justify-center gap-x-10 gap-y-5 mb-8 md:mb-0">
          {[
            { href: "#features", label: "Features" },
            { href: "#demo", label: "Demo" },
            { href: "#faq", label: "FAQ" },
            { href: "https://github.com/murathanje/YT_Full_Browser_Extension", label: "GitHub", external: true }
          ].map((item) => (
            <Link 
              key={item.href}
              href={item.href} 
              className="text-sm text-muted-foreground hover:text-red-600 transition-colors"
              target={item.external ? "_blank" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center gap-4">
          <Link 
            href="https://github.com/murathanje/YT_Full_Browser_Extension" 
            target="_blank"
            className="p-3 rounded-full bg-muted/50 hover:bg-muted transition-colors"
          >
            <Github className="h-5 w-5" />
          </Link>
        </div>
      </div>
      
      <div className="mt-16 text-center text-sm text-muted-foreground">
        <p>
          &copy; {new Date().getFullYear()} YouTube Full Browser Mode. Created by Murathan Kagan.
        </p>
        <p className="mt-2">
          Licensed under <Link href="https://creativecommons.org/licenses/by-nc/4.0/" className="underline hover:text-red-600 transition-colors" target="_blank">CC BY-NC 4.0</Link>
        </p>
      </div>
    </footer>
  );
} 