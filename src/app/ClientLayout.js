"use client";

import Navbars from "./components/Navbars/Navbars";
import { LanguageProvider } from "./context/LanguageContext";

export default function ClientLayout({ children }) {
  return (
    <LanguageProvider>
      <Navbars />
      {children}
    </LanguageProvider>
  );
}
