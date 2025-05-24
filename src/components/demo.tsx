"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Play, KeyRound, MousePointer } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Demo() {
  return (
    <section id="demo" className="py-24 bg-muted/50 rounded-3xl my-16 px-4 md:px-8 relative overflow-hidden">
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          See It in Action
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Watch how the YouTube Full Browser Mode transforms your viewing experience.
        </p>
      </div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <Tabs defaultValue="demo" className="w-full">
          <TabsList className="grid grid-cols-3 w-full max-w-md mx-auto mb-10">
            <TabsTrigger value="demo">Demo</TabsTrigger>
            <TabsTrigger value="keyboard">Keyboard</TabsTrigger>
            <TabsTrigger value="usage">Usage</TabsTrigger>
          </TabsList>
          
          <TabsContent value="demo" className="mt-6">
            <div className="relative aspect-video overflow-hidden rounded-xl shadow-xl">
              <Image 
                src="/assets/video.gif" 
                alt="YouTube Full Browser Mode Demo" 
                width={1200}
                height={675}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Link href="https://github.com/murathanje/YT_Full_Browser_Extension" target="_blank">
                  <Button size="lg" className="gap-2 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 shadow-md hover:shadow-xl transition-all rounded-full px-8">
                    <Play className="h-5 w-5" />
                    Watch Full Demo
                  </Button>
                </Link>
              </div>
            </div>
            <p className="text-center mt-8 text-muted-foreground text-lg">
              The extension adds a button to YouTube&apos;s video player controls for easy toggling.
            </p>
          </TabsContent>
          
          <TabsContent value="keyboard" className="mt-6">
            <div className="bg-card p-10 rounded-xl shadow-sm">
              <div className="flex items-center gap-5 mb-8">
                <KeyRound className="h-12 w-12 text-red-600" />
                <h3 className="text-2xl font-semibold">Keyboard Shortcuts</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 border rounded-lg bg-muted/30 hover:shadow-md transition-shadow">
                  <span className="inline-block bg-background px-4 py-2 rounded text-sm font-mono mb-3 border">i</span>
                  <p className="text-lg">Toggle Full Browser Mode</p>
                </div>
                <div className="p-6 border rounded-lg bg-muted/30 hover:shadow-md transition-shadow">
                  <span className="inline-block bg-background px-4 py-2 rounded text-sm font-mono mb-3 border">ESC</span>
                  <p className="text-lg">Exit Full Browser Mode</p>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="usage" className="mt-6">
            <div className="bg-card p-10 rounded-xl shadow-sm">
              <div className="flex items-center gap-5 mb-8">
                <MousePointer className="h-12 w-12 text-red-600" />
                <h3 className="text-2xl font-semibold">How to Use</h3>
              </div>
              <ol className="space-y-5 pl-8 list-decimal text-lg">
                <li className="pl-2">Open any video on YouTube</li>
                <li className="pl-2">Click the &ldquo;Full Browser Mode&rdquo; button in the video controls</li>
                <li className="pl-2">Enjoy distraction-free viewing with the video filling your entire browser window</li>
                <li className="pl-2">Move your mouse over the video to see the controls, or away to hide them</li>
                <li className="pl-2">Press &apos;i&apos; or click the button again to toggle back to normal mode</li>
              </ol>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
} 