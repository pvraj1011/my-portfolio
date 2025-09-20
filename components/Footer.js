import dynamic from "next/dynamic";

// Add ssr: false to prevent prerendering issues
const Hero = dynamic(() => import("@/components/Hero"), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
    </div>
  ),
});

const Skills = dynamic(() => import("@/components/Skills"), {
  ssr: false,
  loading: () => (
    <div className="py-20 flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
    </div>
  ),
});

const Projects = dynamic(() => import("@/components/Projects"), {
  ssr: false,
  loading: () => (
    <div className="py-20 flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
    </div>
  ),
});

const Contact = dynamic(() => import("@/components/Contact"), {
  ssr: false,
  loading: () => (
    <div className="py-20 flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
    </div>
  ),
});

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
