import clsx from "clsx";
import "@/shared/styles/app.css";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fire Sensor | Nesas Tech",
  description: "",
};

import Sidebar from "@/components/common/sidebar";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/ico" href="/static/logo-tech.svg" />
      </head>
      <body className={clsx(inter.className, "flex")}>
        <Sidebar />
        <main className="w-full pl-20">{children}</main>
      </body>
    </html>
  );
}
