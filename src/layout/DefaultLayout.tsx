import React from "react";
import { DesktopHeader } from "../components/header/DesktopHeader";
import { FooterMain } from "../components/footer/FooterMain";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div>
        <DesktopHeader />
      </div>

      <div className="min-h-screen">{children}</div>

      <div>
        <FooterMain />
      </div>
    </div>
  );
};

export default DefaultLayout;
