import { Maximize, Monitor, MousePointer, Layout, Code, Eye } from "lucide-react";

const features = [
  {
    icon: <Maximize className="h-10 w-10 text-red-600" />,
    title: "Full Browser Mode",
    description: "Expands the YouTube video player to fill the entire browser window for an immersive viewing experience."
  },
  {
    icon: <Monitor className="h-10 w-10 text-red-600" />,
    title: "Optimized Controls",
    description: "Video bar and progress bar span the full width with right-side icons perfectly aligned."
  },
  {
    icon: <MousePointer className="h-10 w-10 text-red-600" />,
    title: "Smart Control Visibility",
    description: "Controls automatically hide and show based on mouse position for distraction-free viewing."
  },
  {
    icon: <Layout className="h-10 w-10 text-red-600" />,
    title: "Clean Interface",
    description: "Hides unnecessary page elements like comments, recommendations, and headers."
  },
  {
    icon: <Code className="h-10 w-10 text-red-600" />,
    title: "Modular Design",
    description: "Built with modular, reusable code following best practices for performance and reliability."
  },
  {
    icon: <Eye className="h-10 w-10 text-red-600" />,
    title: "Accessible Captions",
    description: "Captions and settings menu remain accessible and properly positioned in full browser mode."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-4 md:px-8">
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Powerful Features
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Enhance your YouTube viewing experience with these carefully designed features.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="p-8 border rounded-xl bg-card shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="mb-5">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 