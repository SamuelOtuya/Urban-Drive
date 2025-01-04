import React from "react";
import { DesktopHeader } from "../components/header/DesktopHeader";
import { FooterMain } from "../components/footer/FooterMain";
import { MobileNav } from "../components/header/MobileNav";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="hidden md:block">
        <DesktopHeader />
      </div>

      <div className="block md:hidden">
        <MobileNav/> 
      </div>

      <div className="min-h-screen">{children}</div>

      <div>
        <FooterMain />
      </div>
    </div>
  );
};

export default DefaultLayout;
