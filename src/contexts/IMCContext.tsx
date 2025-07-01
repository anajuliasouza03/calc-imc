"use client";

import { Level } from "@/helpers/imc";
import { createContext, ReactNode, useContext, useState } from "react";

type IMCContextType = {
  toShow: Level | null;
  setToShow: (value: Level | null) => void;
};

const IMCContext = createContext<IMCContextType | undefined>(undefined);

export const IMCProvider = ({ children }: { children: ReactNode }) => {
  const [toShow, setToShow] = useState<Level | null>(null);

  return (
    <IMCContext.Provider value={{ toShow, setToShow }}>
      {children}
    </IMCContext.Provider>
  );
};

export const useIMC = (): IMCContextType => {
  const context = useContext(IMCContext);
  if (!context) {
    throw new Error("useIMC precisa estar dentro de <IMCProvider>");
  }
  return context;
};
