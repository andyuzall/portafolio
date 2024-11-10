import { LazyMotion, domAnimation } from "framer-motion";
import { Suspense } from "react";
import { HeadingDivider, Loader } from "../../../components";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import { Projects } from "../../projects/components/Projects";


export function ProjectsSection() {
  return (
    <LazyMotion features={domAnimation}>
      <section id="projects" className="section">
        <HeadingDivider title="Proyectos recientes" />
        <div className="h-10 md:h-14" />

        <div className="flex flex-col items-center gap-8 md:gap-14">
          <Suspense
            fallback={
              <div className="flex-center">
                <Loader />
              </div>
            }
          >
            <ErrorBoundary FallbackComponent={Error}>
              <Projects/>
            </ErrorBoundary>
          </Suspense>
        </div>
      </section>
    </LazyMotion>
  );
}
