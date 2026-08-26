import { lazy, Suspense, type ReactNode } from "react";
import Navbar from "@/components/Navbar";
import { SectionLoadingProvider, useSectionLoading } from "@/contexts/SectionLoadingContext";

const Footer = lazy(() => import("@/components/Footer"));

type LayoutProps = {
  children: ReactNode;
};

function LayoutContent({ children }: LayoutProps) {
  const { deferredSectionsComplete } = useSectionLoading();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>{children}</main>
      {deferredSectionsComplete && (
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      )}
    </div>
  );
}

export default function Layout({ children }: LayoutProps) {
  return (
    <SectionLoadingProvider>
      <LayoutContent>{children}</LayoutContent>
    </SectionLoadingProvider>
  );
}
