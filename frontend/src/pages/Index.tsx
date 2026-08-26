import { memo } from "react";
import DeferredSections from "@/components/DeferredSections";
import Hero from "@/sections/Hero";

const MemoizedHero = memo(Hero);

const Index = () => {
  return (
    <>
      <MemoizedHero />
      <DeferredSections />
    </>
  );
};

export default Index;
