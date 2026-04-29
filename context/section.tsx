"use client";

import { createContext, useContext, useState } from "react";

export type SectionId = "hero" | "about" | "projects" | "experience" | "contact";

const SectionCtx = createContext<{
  active: SectionId;
  go: (id: SectionId) => void;
}>({ active: "hero", go: () => {} });

export function SectionProvider({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState<SectionId>("hero");

  function go(id: SectionId) {
    setActive(id);
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  return (
    <SectionCtx.Provider value={{ active, go }}>
      {children}
    </SectionCtx.Provider>
  );
}

export const useSection = () => useContext(SectionCtx);
