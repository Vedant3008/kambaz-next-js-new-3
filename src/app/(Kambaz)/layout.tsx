import { ReactNode } from "react";
import KambazNavigation from "./navigation";
import "./styles.css";

export default function KambazLayout({ children }: { children: ReactNode }) {
  return (
    <div id="wd-kambaz">
      <KambazNavigation />
      <div className="wd-main-content-offset">
        {children}
      </div>
    </div>
  );
}