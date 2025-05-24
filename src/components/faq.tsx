"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How is this different from YouTube&apos;s native fullscreen?",
    answer: "Unlike YouTube&apos;s native fullscreen which exits the browser window, this extension keeps you within the browser while providing a fullscreen-like experience. This means you can still access browser tabs, bookmarks, and other browser features while enjoying an immersive YouTube viewing experience."
  },
  {
    question: "Which browsers are supported?",
    answer: "The extension works with Chrome, Brave, Edge, and other Chromium-based browsers. Firefox support is planned for future releases."
  },
  {
    question: "Will this work on mobile devices?",
    answer: "No, this is a browser extension designed for desktop browsers only. Mobile devices have their own YouTube app which offers different viewing modes."
  },
  {
    question: "Can I customize the appearance?",
    answer: "Currently, the extension offers a single, carefully designed appearance. We&apos;re considering adding customization options in future updates."
  },
  {
    question: "Does this work with YouTube Premium?",
    answer: "Yes, the extension works with both free and Premium YouTube accounts, enhancing the viewing experience regardless of your subscription status."
  },
  {
    question: "Is this extension open source?",
    answer: "Yes, the extension is fully open source under the CC BY-NC 4.0 license. You can view the code, contribute, or fork the project on GitHub."
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 px-4 md:px-8 relative">
      <div className="text-center mb-20 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Frequently Asked Questions
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Got questions? We&apos;ve got answers.
        </p>
      </div>
      
      <div className="max-w-3xl mx-auto relative z-10">
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-muted rounded-lg px-1">
              <AccordionTrigger className="text-lg font-medium text-left py-6 px-4 hover:text-red-600 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base px-4 pb-6 pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
} 