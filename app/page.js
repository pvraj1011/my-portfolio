import dynamic from "next/dynamic";
// Lazy load components for better performance
const Hero = dynamic(() => import("@/components/Hero"), {
  loading: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
    </div>
  ),
});
const Skills = dynamic(() => import("@/components/Skills"), {
  loading: () => (
    <div className="py-20 flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
    </div>
  ),
});
const Projects = dynamic(() => import("@/components/Projects"), {
  loading: () => (
    <div className="py-20 flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
    </div>
  ),
});
const Contact = dynamic(() => import("@/components/Contact"), {
  loading: () => (
    <div className="py-20 flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
    </div>
  ),
});
const Experience = dynamic(() => import("@/components/Experience"), {
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
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}
