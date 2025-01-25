'use client'

import { useGlobal } from "@/src/store/global/store";
import { useEffect } from "react";

const LayoutGlobal = ({ children, letter }: Readonly<{ children: React.ReactNode, letter: any }>) => {
  const theme = useGlobal(state => state.theme);
  const setTheme = useGlobal(state => state.setTheme);

  useEffect(() => {
    if(theme !== '') {
      localStorage.setItem("theme", theme);
      document.documentElement.setAttribute("data-mode", theme);
      document.documentElement.setAttribute("data-topbar-color", theme);
      document.documentElement.setAttribute("data-menu-color", theme);
      setTheme(localStorage.getItem("theme") || theme);
    }
  }, [theme]);

  return (
    <html lang="en" 
      data-mode={localStorage.getItem("theme")}
      dir="ltr" data-layout-width="default" data-topbar-color={localStorage.getItem("theme") || theme} data-menu-color={localStorage.getItem("theme") || theme} data-layout-position="fixed">
      <body
        className={`${letter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

export default LayoutGlobal;