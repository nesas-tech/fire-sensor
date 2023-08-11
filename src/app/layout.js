import clsx from "clsx";
import "@/shared/styles/app.css";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nesas Tech | Fire Sensor",
  description: "",
};

import Sidebar from "@/components/common/sidebar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, "flex")}>
        <Sidebar />
        <main className="w-full">{children}</main>
      </body>
    </html>
  );
}
